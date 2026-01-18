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
var xPathChild1_1 = require("./xPathChild1");
var playwrightLoc = /** @class */ (function (_super) {
    __extends(playwrightLoc, _super);
    function playwrightLoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    playwrightLoc.prototype.getbyRole = function () {
        console.log("Get by Role method in playwrightLoc class");
    };
    playwrightLoc.prototype.getByText = function () {
        console.log("Get by Text method in playwrightLoc class");
    };
    return playwrightLoc;
}(xPathChild1_1.xPathChild1));
var playwrightLocObject = new playwrightLoc();
playwrightLocObject.cssMethod();
playwrightLocObject.getbyRole();
playwrightLocObject.getByText();
playwrightLocObject.basicXPathMethod();
playwrightLocObject.advancedXPathMethod();
