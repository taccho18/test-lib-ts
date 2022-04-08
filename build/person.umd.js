(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.test_lib_ts = {}));
})(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
