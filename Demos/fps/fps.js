var FPS = (function () {
    function FPS() {
        var _this = this;
        this.animationCallback = function () {
            _this.framesSeen++;
            _this.totalFrames++;
            _this.animationCallbackHandle = window.requestAnimationFrame(_this.animationCallback);
        };
        this.updateCallback = function () {
            var fps;
            var interval;
            var fpsSessionAverage;
            interval = window.performance.now() - _this.lastUpdate;
            _this.totalDuration += interval;
            fps = Math.round((_this.framesSeen / interval) * 1000);
            _this.logToConsole && console.log("FPS %i", fps);
            _this.fpsElement.textContent = fps.toString();
            _this.fpsElement.style.color = (fps < _this.fpsGoal) ? '#ff0000' : '#00a550';
            fpsSessionAverage = Math.round((_this.totalFrames / _this.totalDuration) * 1000);
            _this.fpsElement.setAttribute('title', "Session average FPS is " + fpsSessionAverage);
            _this.framesSeen = 0;
            _this.lastUpdate = window.performance.now();
        };
        this.updateInterval = 1000;
        this.totalDuration = 0;
        this.totalFrames = 0;
        this.logToConsole = console && console.log && false;
        this.fpsGoal = 60;
    }
    FPS.prototype.start = function (container) {
        this.framesSeen = 0;
        this.lastUpdate = window.performance.now();
        this.animationCallbackHandle = window.requestAnimationFrame(this.animationCallback);
        this.updateCallbackHandle = window.setInterval(this.updateCallback, this.updateInterval);
        this.container = container;
        this.fpsElement = document.createElement('div');
        this.container.appendChild(this.fpsElement);
    };
    FPS.prototype.stop = function () {
        window.cancelAnimationFrame(this.animationCallbackHandle);
        window.clearInterval(this.updateCallbackHandle);
        this.container.removeChild(this.fpsElement);
    };
    return FPS;
}());
