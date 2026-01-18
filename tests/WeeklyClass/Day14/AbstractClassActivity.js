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
var ClassActivityAbstract = /** @class */ (function () {
    function ClassActivityAbstract() {
    }
    ClassActivityAbstract.prototype.typeAndClick = function () {
        console.log("Typing and Clicking action performed");
    };
    return ClassActivityAbstract;
}());
var extendedClass = /** @class */ (function (_super) {
    __extends(extendedClass, _super);
    function extendedClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    extendedClass.prototype.enterText = function () {
        console.log("Entering text in the field");
    };
    extendedClass.prototype.click = function () {
        console.log("Clicking the button");
    };
    return extendedClass;
}(ClassActivityAbstract));
var obj = new extendedClass();
obj.typeAndClick();
obj.enterText();
obj.click();
