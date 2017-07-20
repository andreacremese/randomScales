"use strict";
var Logic = (function () {
    function Logic() {
        throw new Error("cannot instantiate Logic class");
    }
    Logic.getScale = function () {
        return this.scales[Math.floor(Math.random() * this.scales.length)] + this.accidents[Math.floor(Math.random() * this.accidents.length)];
    };
    Logic.getAlteration = function () {
        return this.typeOfScales[Math.floor(Math.random() * this.typeOfScales.length)];
    };
    Logic.scales = ["A", "B", "C", "D", "E", "F", "G"];
    Logic.accidents = ["", "#", "b"];
    Logic.typeOfScales = ["maj", "min", "dom"];
    return Logic;
}());
/// <reference path="logic.ts" />
function startApp() {
    var scale = document.getElementById("current_scale");
    var alteration = document.getElementById("current_alteration");
    scale.innerText = Logic.getScale();
    alteration.innerText = Logic.getAlteration();
}
document.getElementById("button").addEventListener('click', startApp);
//# sourceMappingURL=app.js.map