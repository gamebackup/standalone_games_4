"use strict";

(function () {
    var AD_CLIENT = "ca-pub-7474256871099866";
    var H5_SCRIPT_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    var H5_SDK_TIMEOUT_MS = 3000;
    var INTERSTITIAL_TIMEOUT_MS = 5000;
    var REWARD_TIMEOUT_MS = 3500;
    var REWARD_UNAVAILABLE_MESSAGE = "Ad unavailable. Please try again later or disable your ad blocker.";
    var REWARD_SKIPPED_MESSAGE = "Reward not granted. Watch the full ad to receive the reward.";

    var sdkPromise = null;
    var adInProgress = false;
    var h5ProbablyBlocked = false;
    var interstitialState = "";
    var messageTimerId = 0;

    function isH5Ready() {
        return typeof window.adBreak === "function" && typeof window.adConfig === "function";
    }

    function isLocalTestingHost() {
        // Mirrored copy: always take the local path so the game never requests
        // Google's H5 ad SDK (adsbygoogle / pagead2.googlesyndication.com).
        // Interstitials and rewarded ads are simulated by the local branches below.
        return true;
    }

    function logLocalState(adType, state) {
        if (isLocalTestingHost()) {
            console.info("[H5Ads] Local " + adType + " state:", state);
        }
    }

    function restoreGameFocus() {
        var focusCanvas = function () {
            var canvas = document.getElementById("unity-canvas");

            window.focus();

            if (canvas && typeof canvas.focus === "function") {
                canvas.focus();
            }
        };

        focusCanvas();
        setTimeout(focusCanvas, 50);
    }

    function showRewardMessage(text) {
        var id = "h5-reward-message";
        var message = document.getElementById(id);

        if (!message) {
            message = document.createElement("div");
            message.id = id;
            message.setAttribute("role", "status");
            message.style.position = "fixed";
            message.style.top = "24px";
            message.style.left = "50%";
            message.style.zIndex = "2147483647";
            message.style.maxWidth = "min(520px, calc(100vw - 32px))";
            message.style.padding = "12px 16px";
            message.style.borderRadius = "8px";
            message.style.background = "rgba(16, 18, 24, 0.94)";
            message.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.35)";
            message.style.color = "#fff";
            message.style.font = "600 16px/1.35 Arial, Helvetica, sans-serif";
            message.style.textAlign = "center";
            message.style.pointerEvents = "none";
            message.style.transform = "translate(-50%, -12px)";
            message.style.opacity = "0";
            message.style.transition = "opacity 160ms ease, transform 160ms ease";
            document.body.appendChild(message);
        }

        message.textContent = text;
        message.style.opacity = "1";
        message.style.transform = "translate(-50%, 0)";

        clearTimeout(messageTimerId);
        messageTimerId = setTimeout(function () {
            message.style.opacity = "0";
            message.style.transform = "translate(-50%, -12px)";
        }, 4500);
    }

    function ensureH5Sdk() {
        if (isLocalTestingHost()) {
            h5ProbablyBlocked = true;
            return Promise.reject(new Error("Google H5 ads are disabled on local testing hosts"));
        }

        if (sdkPromise) {
            return sdkPromise;
        }

        if (isH5Ready()) {
            return Promise.resolve();
        }

        window.adsbygoogle = window.adsbygoogle || [];
        window.adBreak = window.adConfig = function (options) {
            window.adsbygoogle.push(options);
        };

        sdkPromise = new Promise(function (resolve, reject) {
            var completed = false;
            var script = document.createElement("script");
            var timeoutId = setTimeout(function () {
                finish(reject, new Error("Google H5 SDK load timed out"));
            }, H5_SDK_TIMEOUT_MS);

            function finish(callback, value) {
                if (completed) {
                    return;
                }

                completed = true;
                clearTimeout(timeoutId);
                callback(value);
            }

            script.async = true;
            script.dataset.adClient = AD_CLIENT;
            script.dataset.adHost = AD_CLIENT;
            script.src = H5_SCRIPT_URL;
            script.crossOrigin = "anonymous";
            script.onload = function () {
                finish(resolve);
            };
            script.onerror = function () {
                finish(reject, new Error("Google H5 SDK failed to load"));
            };

            document.head.appendChild(script);
        }).then(function () {
            h5ProbablyBlocked = false;

            try {
                window.adConfig({
                    preloadAdBreaks: "on",
                    sound: "on"
                });
            } catch (err) {
                console.warn("[H5Ads] adConfig failed", err);
            }
        });

        return sdkPromise;
    }

    function preload() {
        ensureH5Sdk()["catch"](function (error) {
            h5ProbablyBlocked = true;
            console.warn("[H5Ads] preload failed", error);
        });
    }

    function emitSoon(callback, states) {
        var delay = 0;

        states.forEach(function (state) {
            delay += 50;
            setTimeout(function () {
                callback(state);
            }, delay);
        });

        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(true);
            }, delay + 10);
        });
    }

    function runAdBreak(options, timeoutMs) {
        timeoutMs = timeoutMs || 3000;

        return ensureH5Sdk().then(function () {
            if (adInProgress || typeof window.adBreak !== "function") {
                return false;
            }

            return new Promise(function (resolve) {
                var completed = false;
                var adStarted = false;
                var timeoutId = setTimeout(function () {
                    finish(false);
                }, timeoutMs);

                function markAdStarted() {
                    if (!completed && !adStarted) {
                        adStarted = true;
                        clearTimeout(timeoutId);
                    }
                }

                function finish(result) {
                    if (completed) {
                        return;
                    }

                    completed = true;
                    adInProgress = false;
                    clearTimeout(timeoutId);
                    resolve(!!result);
                }

                adInProgress = true;

                try {
                    var adBreakOptions = {
                        type: options.type,
                        name: options.name,
                        adBreakDone: function () {
                            if (completed) return;
                            if (typeof options.adBreakDone === "function") {
                                options.adBreakDone();
                            }

                            finish(options.type === "reward" ? !!options.__rewardViewed : true);
                        }
                    };

                    adBreakOptions.beforeAd = function () {
                        if (completed) return;
                        markAdStarted();
                        if (typeof options.beforeAd === "function") options.beforeAd();
                    };

                    if (options.type === "reward") {
                        adBreakOptions.beforeReward = function (showAdFn) {
                            if (completed) return;

                            if (typeof options.beforeReward === "function") {
                                options.beforeReward(showAdFn);
                            }
                        };

                        adBreakOptions.adViewed = function () {
                            if (completed) return;
                            options.__rewardViewed = true;

                            if (typeof options.adViewed === "function") {
                                options.adViewed();
                            }
                        };

                        adBreakOptions.adDismissed = function () {
                            if (completed) return;
                            options.__rewardViewed = false;

                            if (typeof options.adDismissed === "function") {
                                options.adDismissed();
                            }
                        };
                    }

                    window.adBreak(adBreakOptions);
                } catch (err) {
                    console.warn("[H5Ads] adBreak failed", err);
                    finish(false);
                }
            });
        })["catch"](function (error) {
            h5ProbablyBlocked = true;
            console.warn("[H5Ads] SDK load failed", error);
            return false;
        });
    }

    function showInterstitial(onStateChanged) {
        interstitialState = "loading";
        onStateChanged(interstitialState);
        logLocalState("interstitial", interstitialState);

        if (isLocalTestingHost()) {
            return emitSoon(function (state) {
                interstitialState = state;

                if (state === "closed") {
                    restoreGameFocus();
                }

                onStateChanged(state);
                logLocalState("interstitial", state);
            }, ["opened", "closed"]);
        }

        return runAdBreak({
            type: "start",
            name: "h5_interstitial",
            beforeAd: function () {
                interstitialState = "opened";
                onStateChanged(interstitialState);
            },
            adBreakDone: function () {
                interstitialState = "closed";
                restoreGameFocus();
                onStateChanged(interstitialState);
            }
        }, INTERSTITIAL_TIMEOUT_MS).then(function (success) {
            if (!success) {
                interstitialState = "failed";
                restoreGameFocus();
                onStateChanged(interstitialState);
            }

            return success;
        });
    }

    function showRewarded(onStateChanged) {
        if (isLocalTestingHost()) {
            onStateChanged("loading");
            logLocalState("rewarded", "loading");
            return emitSoon(function (state) {
                if (state === "closed") {
                    restoreGameFocus();
                }

                onStateChanged(state);
                logLocalState("rewarded", state);
            }, ["opened", "rewarded", "closed"]);
        }

        if (h5ProbablyBlocked) {
            showRewardMessage(REWARD_UNAVAILABLE_MESSAGE);
            onStateChanged("failed");
            restoreGameFocus();
            return Promise.resolve(false);
        }

        onStateChanged("loading");

        var options = {
            type: "reward",
            name: "h5_rewarded",
            __rewardViewed: false,
            __rewardDismissed: false,
            beforeReward: function (showAdFn) {
                if (typeof showAdFn === "function") {
                    showAdFn();
                }
            },
            beforeAd: function () {
                onStateChanged("opened");
            },
            adViewed: function () {
                options.__rewardViewed = true;
                onStateChanged("rewarded");
            },
            adDismissed: function () {
                options.__rewardViewed = false;
                options.__rewardDismissed = true;
            },
            adBreakDone: function () {
                restoreGameFocus();
                onStateChanged("closed");
            }
        };

        return runAdBreak(options, REWARD_TIMEOUT_MS).then(function (success) {
            if (!success) {
                showRewardMessage(options.__rewardDismissed ? REWARD_SKIPPED_MESSAGE : REWARD_UNAVAILABLE_MESSAGE);
                restoreGameFocus();
                onStateChanged("failed");
            }

            return success;
        });
    }

    window.h5Ads = {
        preload: preload,
        showInterstitial: showInterstitial,
        showRewarded: showRewarded,
        isBlocked: function () {
            if (isLocalTestingHost()) {
                return false;
            }

            return h5ProbablyBlocked;
        },
        getInterstitialState: function () {
            return interstitialState;
        }
    };
})();
