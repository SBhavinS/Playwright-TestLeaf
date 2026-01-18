"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.xPathChild1 = void 0;
var LocatorParent_1 = require("./LocatorParent");
var xPathChild1 = /** @class */ (function (_super) {
    __extends(xPathChild1, _super);
    function xPathChild1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    xPathChild1.prototype.basicXPathMethod = function () {
        console.log("Basic XPath method in xPathChild1 class");
    };
    xPathChild1.prototype.advancedXPathMethod = function () {
        console.log("Advanced XPath method in xPathChild1 class");
    };
    xPathChild1.prototype.cssMethod = function () {
        console.log("locatorMethod:css in Locator xPathchild1 class");
    };
    return xPathChild1;
}(LocatorParent_1.LocatorParent));
exports.xPathChild1 = xPathChild1;
var xPathChildObject = new xPathChild1();
xPathChildObject.cssMethod();
xPathChildObject.basicXPathMethod();
xPathChildObject.advancedXPathMethod();
