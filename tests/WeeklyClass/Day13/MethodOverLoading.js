"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
/*MethodOverLoading:
create Class Method
methods -> fill(locator:string):void
fill(locator:string,text:string):void*/
var Method = /** @class */ (function () {
    function Method() {
    }
    Method.prototype.fill = function (locator, text) {
        if (text === undefined) {
            console.log("Filling the locator: ".concat(locator));
        }
        else {
            console.log("Filling the locator: ".concat(locator, " with text: ").concat(text));
        }
    };
    return Method;
}());
exports.Method = Method;
var methodObject = new Method();
methodObject.fill("usernameLocator");
methodObject.fill("passwordLocator", "mySecretPassword");
