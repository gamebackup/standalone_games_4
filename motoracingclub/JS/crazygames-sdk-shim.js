/*
 * Local stand-in for window.CrazyGames.SDK.
 *
 * The Unity build drives the CrazyGames plugin through ~25 calls on this object
 * (see Build/moto-racing-club.framework.js). Nothing here talks to a network or
 * an ad server: storage is localStorage, ads "finish" immediately, and the
 * account features report the game as running as a guest.
 */
(function () {
    'use strict';

    if (window.CrazyGames && window.CrazyGames.SDK && window.CrazyGames.SDK.__shim) return;

    var PREFIX = 'mrc-sdk:';

    // The plugin stringifies arguments before handing them over, so values can
    // arrive as JSON text (e.g. getItem('"save"') means the key "save").
    function unwrap(value) {
        if (typeof value !== 'string') return value;
        try {
            var parsed = JSON.parse(value);
            return (typeof parsed === 'string') ? parsed : parsed;
        } catch (e) {
            return value;
        }
    }

    function read(key) {
        try {
            return window.localStorage.getItem(PREFIX + key);
        } catch (e) {
            return null;
        }
    }

    function write(key, value) {
        try {
            window.localStorage.setItem(PREFIX + key, value);
        } catch (e) { /* private mode / quota — ignore */ }
    }

    function remove(key) {
        try {
            window.localStorage.removeItem(PREFIX + key);
        } catch (e) { /* ignore */ }
    }

    function noop() {}

    var callbacks = {};

    function fireAll() {
        var args = Array.prototype.slice.call(arguments);
        Object.keys(callbacks).forEach(function (id) {
            var fn = callbacks[id];
            if (typeof fn === 'function') {
                try { fn.apply(null, args); } catch (e) { /* ignore */ }
            }
        });
    }

    var SDK = {
        __shim: true,

        // ---------------------------------------------------------------- init
        init: function (options) {
            SDK.initOptions = options || {};
            return Promise.resolve();
        },

        // 'local' keeps the game on the no-advertising path.
        environment: 'local',
        isQaTool: false,
        version: '1.0.0',

        // ------------------------------------------------------------------ ad
        ad: {
            hasAdblock: function () {
                return Promise.resolve(false);
            },
            // The real SDK reports through callbacks; resolve immediately so the
            // game's own state machine keeps moving.
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

        banner: {
            requestOverlayBanners: function (banners, cb) {
                if (typeof cb === 'function') {
                    try { cb(null, 'unavailable', 'Banners are disabled in this copy'); } catch (e) { /* ignore */ }
                }
            }
        },

        // ---------------------------------------------------------------- data
        data: {
            getItem: function (key) {
                return read(unwrap(key));
            },
            setItem: function (key, value) {
                write(unwrap(key), String(unwrap(value)));
            },
            removeItem: function (key) {
                remove(unwrap(key));
            },
            clear: function () {
                try {
                    var keys = [];
                    for (var i = 0; i < window.localStorage.length; i++) {
                        var k = window.localStorage.key(i);
                        if (k && k.indexOf(PREFIX) === 0) keys.push(k);
                    }
                    keys.forEach(function (k) { window.localStorage.removeItem(k); });
                } catch (e) { /* ignore */ }
            },
            syncUnityGameData: noop
        },

        // ---------------------------------------------------------------- game
        game: {
            gameplayStart: noop,
            gameplayStop: noop,
            happytime: noop,
            inviteLink: function () { return ''; },
            showInviteButton: noop,
            hideInviteButton: noop
        },

        // ---------------------------------------------------------------- user
        user: {
            // No account system locally: everything reports a guest session.
            isUserAccountAvailable: false,
            getUser: function () { return Promise.resolve(null); },
            getUserToken: function () { return Promise.resolve(null); },
            getXsollaUserToken: function () { return Promise.resolve(null); },
            showAuthPrompt: function () { return Promise.resolve(null); },
            showAccountLinkPrompt: function () { return Promise.resolve(null); },
            addScore: noop,
            addAuthListener: function (cb) {
                if (typeof cb === 'function') callbacks.auth = cb;
            },
            systemInfo: { countryCode: 'US' }
        },

        analytics: {
            trackOrder: noop
        }
    };

    window.CrazyGames = window.CrazyGames || {};
    window.CrazyGames.SDK = SDK;

    // Some builds probe these aliases before init resolves.
    window.CrazySDK = window.CrazySDK || SDK;
    window.crazySDK = window.crazySDK || SDK;
    window.__shimFireAll = fireAll;
})();
