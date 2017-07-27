"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Roots of scales in English A -> G
 */
var Roots;
(function (Roots) {
    Roots[Roots["A"] = 0] = "A";
    Roots[Roots["B"] = 1] = "B";
    Roots[Roots["C"] = 2] = "C";
    Roots[Roots["D"] = 3] = "D";
    Roots[Roots["E"] = 4] = "E";
    Roots[Roots["F"] = 5] = "F";
    Roots[Roots["G"] = 6] = "G";
})(Roots || (Roots = {}));
exports.Roots = Roots;
/**
 * Available accidents in the temperate system
 */
var Accidents;
(function (Accidents) {
    Accidents[Accidents[""] = 0] = "";
    Accidents[Accidents["#"] = 1] = "#";
    Accidents[Accidents["b"] = 2] = "b";
})(Accidents || (Accidents = {}));
exports.Accidents = Accidents;
/**
 * current alterations
 */
var Alterations;
(function (Alterations) {
    Alterations[Alterations["maj"] = 0] = "maj";
    Alterations[Alterations["min"] = 1] = "min";
    Alterations[Alterations["dom"] = 2] = "dom";
})(Alterations || (Alterations = {}));
exports.Alterations = Alterations;
