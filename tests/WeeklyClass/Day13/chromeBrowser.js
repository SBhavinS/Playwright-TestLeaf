"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chrome = /** @class */ (function () {
    function Chrome() {
    }
    Chrome.prototype.launchChromeBrowser = function () {
        console.log("Launch the Chrome Browser");
    };
    return Chrome;
}());
var chromeObject = new Chrome();
chromeObject.launchChromeBrowser();
