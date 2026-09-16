(function () {
  "use strict";

  function noOp() {}

  function resolvedVal(val) {
    return new Promise(function (resolve) {
      resolve(val);
    });
  }

  var PokiSDK = {
    init: function () {
      return resolvedVal({});
    },
    gameLoadingStart: noOp,
    gameLoadingFinished: noOp,
    gameplayStart: noOp,
    gameplayStop: noOp,
    commercialBreak: function () {
      return resolvedVal({});
    },
    rewardedBreak: function () {
      return resolvedVal(true);
    },
    displayAd: noOp,
    destroyAd: noOp,
    customEvent: function () {
      return resolvedVal({});
    },
    shortcut: {},
    shareableURL: {
      create: function () {
        return resolvedVal({ url: window.location.href });
      },
      replace: noOp,
    },
  };

  if (typeof window !== "undefined") {
    window.PokiSDK = PokiSDK;
  }
  if (typeof globalThis !== "undefined") {
    globalThis.PokiSDK = PokiSDK;
  }

  return PokiSDK;
})();