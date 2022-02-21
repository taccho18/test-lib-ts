(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
=======
    exports.Person = void 0;
>>>>>>> origin/master
    class Person {
        constructor(name) {
            this.name = name;
        }
        call() {
            return this.name;
        }
        testPerson() {
            return "test";
        }
    }
    exports.Person = Person;
});
<<<<<<< HEAD
//# sourceMappingURL=index.js.map
=======
//# sourceMappingURL=index.js.map
>>>>>>> origin/master
