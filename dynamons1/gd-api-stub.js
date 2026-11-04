/* Local stand-in for //html5.api.gamedistribution.com/libs/gd/api.js
   Keeps the game's ad/reward calls resolving without any network access. */
(function () {
  var settings = {};

  function init(arg) {
    var s = (typeof arg === "function") ? {} : (arg || {});
    settings = s;
    window.__gdSettings = s;
    try { if (s.onInit) s.onInit({}); } catch (e) {}
  }

  function api() {
    for (var i = 0; i < arguments.length; i++) init(arguments[i]);
    return {
      preloadAd: function (cb) { if (typeof cb === "function") cb(); return Promise.resolve(); },
      showAd: function (a, b) {
        var cb = (typeof a === "function") ? a : b;
        if (typeof cb === "function") cb();
        return Promise.resolve();
      },
      showBanner: function () { return Promise.resolve(); },
      showMidroll: function (cb) { if (typeof cb === "function") cb(); return Promise.resolve(); },
      refreshBanner: function () { return Promise.resolve(); },
      resumeGame: function () { if (settings.resumeGame) settings.resumeGame(); },
      pauseGame: function () { if (settings.pauseGame) settings.pauseGame(); },
      toggleBanner: function () {}
    };
  }

  var queued = (window.gdApi && window.gdApi.q) ? window.gdApi.q : [];
  window.gdApi = api;
  window.GameDistribution = api;
  for (var i = 0; i < queued.length; i++) init(queued[i]);
})();
