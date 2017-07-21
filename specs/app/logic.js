"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scales = require("./scales");
var ScalesGenerator = (function () {
    function ScalesGenerator() {
        throw new Error("cannot instantiate Logic class");
    }
    ScalesGenerator.getScale = function () {
        var numberOfRoots = Object.keys(Scales.Roots).length / 2;
        var numberOfAccidents = Object.keys(Scales.Accidents).length / 2;
        return Scales.Roots[Math.floor(Math.random() * numberOfRoots)] + Scales.Accidents[Math.floor(Math.random() * numberOfAccidents)];
    };
    ScalesGenerator.getAlteration = function () {
        var numberOfAccidents = Object.keys(Scales.Accidents).length / 2;
        return Scales.Alterations[Math.floor(Math.random() * numberOfAccidents)];
    };
    return ScalesGenerator;
}());
exports.ScalesGenerator = ScalesGenerator;
//# sourceMappingURL=logic.js.map