"use strict";

(function () {
    var progress = 0;
    var ready = false;
    var failed = false;
    var removalScheduled = false;

    function render() {
        var screen = document.getElementById("sqube-loading");
        if (!screen) return;

        var percent = Math.round(progress * 100);
        document.getElementById("sqube-loading-percent").textContent = percent + "%";
        document.getElementById("sqube-loading-fill").style.transform = "scaleX(" + progress + ")";
        document.getElementById("sqube-loading-progress").setAttribute("aria-valuenow", String(percent));
        document.getElementById("sqube-loading-label").textContent = failed ? "Unable to load game" : progress === 1 ? "Starting game" : "Loading game";
        document.getElementById("sqube-loading-error").hidden = !failed;

        if (ready && !removalScheduled) {
            removalScheduled = true;
            screen.classList.add("is-ready");
            setTimeout(function () { screen.remove(); }, 280);
        }
    }

    window.squbeLoading = {
        progress: function (value) {
            if (ready || failed || !Number.isFinite(value)) return;
            progress = Math.max(progress, Math.min(1, Math.max(0, value)));
            render();
        },
        ready: function () {
            if (ready) return;
            progress = 1;
            ready = true;
            failed = false;
            render();
        },
        error: function () {
            if (ready) return;
            failed = true;
            render();
        }
    };

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render, { once: true });
    else render();
})();
