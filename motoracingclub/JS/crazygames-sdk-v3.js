/*
 * Stub for the CrazyGames HTML5 SDK v3.
 *
 * The Unity build injects this file itself at boot:
 *     script.src = "JS/crazygames-sdk-v3.js"; ... onload -> CrazyGames.SDK.init()
 * The genuine SDK only initialises on crazygames.com. Anywhere else it installs a
 * "disabled" object whose every getter throws { code: "sdkDisabled" }, and the
 * Unity side turns those rejections into repeated
 * "PlayerLoop internal function has been called recursively" errors.
 *
 * JS/crazygames-sdk-shim.js (loaded from index.html before the build boots)
 * already implements every SDK member framework.js uses, so this file must not
 * overwrite it. The original download is kept at
 * JS/unused/crazygames-sdk-v3.real.js in case the real SDK is ever wanted back.
 */
(function () {
    'use strict';

    // Normal path: the shim is already installed and stays in place.
    if (window.CrazyGames && window.CrazyGames.SDK) {
        window.CrazyGames.SDK.__stubbedOriginal = true;
        return;
    }

    // Safety net, only reachable if index.html was edited to drop the shim.
    var noop = function () {};
    var later = function (value) { return Promise.resolve(value); };

    window.CrazyGames = window.CrazyGames || {};
    window.CrazyGames.SDK = {
        __shim: true,
        environment: 'local',
        isQaTool: false,
        version: '1.0.0',
        init: function () { return later(); },
        ad: {
            hasAdblock: function () { return later(false); },
            requestAd: function (adType, cbs) {
                if (cbs && typeof cbs.adStarted === 'function') {
                    try { cbs.adStarted(); } catch (e) { /* ignore */ }
                }
                setTimeout(function () {
                    if (cbs && typeof cbs.adFinished === 'function') {
                        try { cbs.adFinished(); } catch (e) { /* ignore */ }
                    }
                }, 0);
            }
        },
        banner: { requestOverlayBanners: noop },
        data: {
            getItem: function () { return null; },
            setItem: noop,
            removeItem: noop,
            clear: noop,
            syncUnityGameData: noop
        },
        game: {
            gameplayStart: noop,
            gameplayStop: noop,
            happytime: noop,
            inviteLink: function () { return ''; },
            showInviteButton: noop,
            hideInviteButton: noop
        },
        user: {
            isUserAccountAvailable: false,
            getUser: function () { return later(null); },
            getUserToken: function () { return later(null); },
            getXsollaUserToken: function () { return later(null); },
            showAuthPrompt: function () { return later(null); },
            showAccountLinkPrompt: function () { return later(null); },
            addScore: noop,
            addAuthListener: noop,
            systemInfo: { countryCode: 'US' }
        },
        analytics: { trackOrder: noop }
    };
})();
