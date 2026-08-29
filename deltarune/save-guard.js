(function () {
  if (window.DT_SaveGuardLoaded) return;
  window.DT_SaveGuardLoaded = true;

  var INTERVAL_MS = 5 * 60 * 1000;

  function getModule() {
    try {
      if (window && window.Module && window.Module.DT_saveSync) return window.Module;
    } catch (e) { }
    return null;
  }

  function flush(why) {
    var m = getModule();
    if (!m) return;
    try {
      m.DT_saveSync(false, function () { });
      if (window.DT_SaveGuardDebug) console.log("[save-guard] flushed to IndexedDB:", why);
    } catch (e) {
      if (window.DT_SaveGuardDebug) console.error("[save-guard] flush error:", why, e);
    }
  }

  // Read-only view of the shared save store. All chapters share this same
  // IndexedDB database (/_savedata, store FILE_DATA), so keys listed here are
  // exactly what every chapter's game sees on its next FSSync load.
  function listSaves() {
    return new Promise(function (resolve) {
      try {
        var req = window.indexedDB.open("/_savedata", 21);
        req.onerror = function () { resolve([]); };
        req.onupgradeneeded = function () { resolve([]); };
        req.onsuccess = function () {
          var db = req.result;
          try {
            if (!db.objectStoreNames.contains("FILE_DATA")) { db.close(); resolve([]); return; }
            var tx = db.transaction(["FILE_DATA"], "readonly");
            var store = tx.objectStore("FILE_DATA");
            var kre = store.getAllKeys();
            kre.onsuccess = function () { var keys = (kre.result || []).map(String); db.close(); resolve(keys); };
            kre.onerror = function () { db.close(); resolve([]); };
          } catch (e) { db.close(); resolve([]); }
        };
      } catch (e) { resolve([]); }
    });
  }

  // Expose helpers for manual / cross-chapter verification.
  window.DT_flushSaves = function () { flush("manual"); };
  window.DT_listSaves = listSaves;

  // Once armed, occasionally log the shared save keys so cross-chapter
  // carry is observable (mirrors what ch5's SaveManager shows).
  function logSavesOnce() {
    listSaves().then(function (keys) {
      if (window.DT_SaveGuardDebug) console.log("[save-guard] shared saves:", keys);
    });
  }

  var started = false;
  function start() {
    if (started) return;
    if (!getModule()) return;
    started = true;

    setInterval(function () { flush("autosave-5min"); }, INTERVAL_MS);

    window.addEventListener("pagehide", function () { flush("pagehide"); });
    window.addEventListener("beforeunload", function () { flush("beforeunload"); });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") flush("hidden");
    });
    if (typeof document.addEventListener === "function") {
      document.addEventListener("freeze", function () { flush("freeze"); });
    }
    flush("boot");
    logSavesOnce();
    if (window.DT_SaveGuardDebug) console.log("[save-guard] active; next autosave in ~5 min");
  }

  var guard = 0;
  function poll() {
    if (started) return;
    if (getModule()) { start(); return; }
    if (++guard < 600) setTimeout(poll, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", poll);
  } else {
    poll();
  }
  setTimeout(poll, 0);
})();