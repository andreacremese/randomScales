"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScalesGenerator = (function () {
    function ScalesGenerator() {
        throw new Error("cannot instantiate Logic class");
    }
    ScalesGenerator.getScale = function () {
        return this.scales[Math.floor(Math.random() * this.scales.length)] + this.accidents[Math.floor(Math.random() * this.accidents.length)];
    };
    ScalesGenerator.getAlteration = function () {
        return this.typeOfScales[Math.floor(Math.random() * this.typeOfScales.length)];
    };
    ScalesGenerator.scales = ["A", "B", "C", "D", "E", "F", "G"];
    ScalesGenerator.accidents = ["", "#", "b"];
    ScalesGenerator.typeOfScales = ["maj", "min", "dom"];
    return ScalesGenerator;
}());
exports.ScalesGenerator = ScalesGenerator;
//# sourceMappingURL=logic.js.map