"use strict";

(function () {
    var sdk = window.CrazyGames && window.CrazyGames.SDK;
    if (!sdk || !sdk.ad || !window.h5Ads) {
        console.error("[H5Ads] Sqube Darkness ad bridge could not initialize");
        return;
    }

    var busy = false;

    // Keep the existing SDK's initialization, storage and game services.
    sdk.ad.prefetchAd = function () {
        window.h5Ads.preload();
        return Promise.resolve();
    };
    sdk.ad.hasAdblock = function () {
        return Promise.resolve(window.h5Ads.isBlocked());
    };
    sdk.ad.requestAd = function (type, callbacks) {
        callbacks = callbacks || {};

        function notify(name, value) {
            if (typeof callbacks[name] === "function") {
                callbacks[name](value);
            }
        }

        if (busy) {
            notify("adError", { code: "other", message: "An ad is already in progress" });
            return Promise.resolve();
        }
        if (type !== "rewarded" && type !== "midgame") {
            notify("adError", { code: "other", message: "Unsupported ad type: " + type });
            return Promise.resolve();
        }

        busy = true;
        var started = false;
        var rewarded = false;
        var muted = false;
        var finished = false;

        function finish(success) {
            if (finished) return;
            finished = true;
            busy = false;
            if (muted && window.audioController) window.audioController.unmute();
            if (success && (type !== "rewarded" || rewarded)) {
                notify("adFinished");
            } else {
                notify("adError", {
                    code: window.h5Ads.isBlocked() ? "adblock" : "noAdAvailable",
                    message: "Ad unavailable or closed before completion"
                });
            }
        }

        function onStateChanged(state) {
            if (finished) return;
            if (state === "opened" && !started) {
                started = true;
                if (window.audioController) {
                    window.audioController.mute();
                    muted = true;
                }
                notify("adStarted");
            }
            if (state === "rewarded") rewarded = true;
        }

        var request = type === "rewarded" ? window.h5Ads.showRewarded : window.h5Ads.showInterstitial;
        return request(onStateChanged).then(finish, function (error) {
            console.warn("[H5Ads] Sqube Darkness ad request failed", error);
            finish(false);
        });
    };

    window.h5Ads.preload();
})();
