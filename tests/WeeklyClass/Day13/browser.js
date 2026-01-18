"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser(browserName) {
        this.browserName = browserName;
        console.log("Browser Name is: " + this.browserName);
    }
    Browser.prototype.browserType = function () {
        console.log("browserType method in Browser class");
    };
    Browser.prototype.browserVersion = function () {
        console.log("browserVersion method in Browser class");
    };
    return Browser;
}());
exports.Browser = Browser;
