"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocatorParent = void 0;
var LocatorParent = /** @class */ (function () {
    function LocatorParent() {
    }
    LocatorParent.cssMethod = function () {
        throw new Error('Method not implemented.');
    };
    LocatorParent.prototype.cssMethod = function () {
        console.log("locatorMethod:css in Locator parent class");
    };
    return LocatorParent;
}());
exports.LocatorParent = LocatorParent;
var locatorParentObject = new LocatorParent();
locatorParentObject.cssMethod();
