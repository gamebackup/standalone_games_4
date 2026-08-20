// Standalone save/load system for coin persistence (replaces GamePush SDK)
(function() {
    var SAVE_KEY = 'stickman_kombat_coins_save';
    var patched = false;

    function saveToStorage(data) {
        try { localStorage.setItem(SAVE_KEY, data); } catch(e) {}
    }

    function loadFromStorage() {
        try { return localStorage.getItem(SAVE_KEY); } catch(e) { return null; }
    }

    function deepMerge(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                    if (typeof target[key] !== 'object' || target[key] === null || Array.isArray(target[key])) {
                        target[key] = {};
                    }
                    deepMerge(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
        return target;
    }

    function saveInstanceState(instance) {
        try {
            if (instance && instance._data && instance._data.hasOwnProperty('coins')) {
                saveToStorage(JSON.stringify(instance._data));
            }
        } catch(e) {}
    }

    var checkInterval = setInterval(function() {
        if (patched) return;
        if (typeof self === 'undefined' || !self.C3 || !self.C3.Plugins || !self.C3.Plugins.Json || !self.C3.Plugins.Json.Acts) return;

        patched = true;
        clearInterval(checkInterval);

        var JsonActs = self.C3.Plugins.Json.Acts;

        var origSetValue = JsonActs.SetValue;
        JsonActs.SetValue = function(a, b) {
            origSetValue.call(this, a, b);
            saveInstanceState(this);
        };

        var origAddTo = JsonActs.AddTo;
        JsonActs.AddTo = function(a, b) {
            origAddTo.call(this, a, b);
            saveInstanceState(this);
        };

        var origSubtractFrom = JsonActs.SubtractFrom;
        JsonActs.SubtractFrom = function(a, b) {
            origSubtractFrom.call(this, a, b);
            saveInstanceState(this);
        };

        var origParse = JsonActs.Parse;
        JsonActs.Parse = function(a) {
            origParse.call(this, a);
            if (this._data && this._data.hasOwnProperty('coins')) {
                var saved = loadFromStorage();
                if (saved) {
                    try {
                        var savedData = JSON.parse(saved);
                        deepMerge(this._data, savedData);
                    } catch(e) {}
                }
            }
        };

        console.log('[Standalone] Coin save/load system active');
    }, 100);
})();
