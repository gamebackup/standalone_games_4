(() => {
	// Fully offline Poki SDK stub.
	// No external SDK is loaded and no network requests are made.
	// Every method resolves locally so the game runs without any outside calls.

	var urlParam = function (key) {
		var m = RegExp("[?&]" + key + "=([^&]*)").exec(window.location.search);
		return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
	};

	var resolved = function () {
		return new Promise(function (resolve) { resolve(); });
	};
	var resolvedWith = function (value) {
		return function () { return Promise.resolve(value); };
	};
	var noop = function () {};

	window.PokiSDK = {
		// Promises (awaited by the game)
		init: resolved,
		initWithVideoHB: resolved,
		commercialBreak: resolved,
		rewardedBreak: resolvedWith(false),
		getLeaderboard: resolvedWith(null),
		shareableURL: resolvedWith(""),
		getSharableURL: resolvedWith(""),

		// Sync/void methods
		setDebug: noop,
		gameLoadingStart: noop,
		gameLoadingFinished: noop,
		gameLoadingProgress: noop,
		gameInteractive: noop,
		gameplayStart: noop,
		gameplayStop: noop,
		happyTime: noop,
		roundStart: noop,
		roundEnd: noop,
		muteAd: noop,
		customEvent: noop,
		displayAd: noop,
		destroyAd: noop,
		disableProgrammatic: noop,
		logError: noop,
		sendHighscore: noop,
		setPlayerAge: noop,
		togglePlayerAdvertisingConsent: noop,
		setDebugTouchOverlayController: noop,

		getURLParam: function (suffix) {
			return urlParam("gd" + suffix) || urlParam(suffix) || "";
		}
	};
})();
