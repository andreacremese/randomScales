"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScalesEnums_1 = require("./ScalesEnums");
var Scale = (function () {
    /**
     *
     */
    function Scale(root, accident, alteration) {
        if (!Scale.isValidAccident(root, accident)) {
            throw new Error("illegal scale");
        }
        this.root = root;
        this.accident = accident;
        this.alteration = alteration;
    }
    Scale.prototype.toString = function () {
        return "" + ScalesEnums_1.Roots[this.root] + ScalesEnums_1.Accidents[this.accident] + " " + ScalesEnums_1.Alterations[this.alteration];
    };
    //////// static methods
    Scale.getRandomScale = function () {
        var root;
        var accident;
        do {
            root = this.getRandomRoot();
            accident = this.getRandomAccident();
        } while (!this.isValidAccident(root, accident));
        return new Scale(root, accident, this.getRandomAlteration());
    };
    Scale.prototype.getSomeThing = function (thing) {
        console.log(thing.hasOwnProperty("some"));
    };
    // A Bb B C C# D Eb E F F# G Ab 
    Scale.isValidAccident = function (root1, accident) {
        var allowedAccidents = {};
        allowedAccidents[ScalesEnums_1.Roots.A] = { allowedAccident: ScalesEnums_1.Accidents.b };
        allowedAccidents[ScalesEnums_1.Roots.B] = { allowedAccident: ScalesEnums_1.Accidents.b };
        allowedAccidents[ScalesEnums_1.Roots.C] = { allowedAccident: ScalesEnums_1.Accidents["#"] };
        allowedAccidents[ScalesEnums_1.Roots.D] = { allowedAccident: undefined };
        allowedAccidents[ScalesEnums_1.Roots.E] = { allowedAccident: ScalesEnums_1.Accidents.b };
        allowedAccidents[ScalesEnums_1.Roots.F] = { allowedAccident: ScalesEnums_1.Accidents["#"] };
        allowedAccidents[ScalesEnums_1.Roots.G] = { allowedAccident: undefined };
        return accident == ScalesEnums_1.Accidents[""] || accident == allowedAccidents[root1].allowedAccident;
    };
    // statics
    Scale.getRandomRoot = function () {
        var numberOfRoots = Object.keys(ScalesEnums_1.Roots).length / 2;
        return Math.floor(Math.random() * numberOfRoots);
    };
    Scale.getRandomAlteration = function () {
        var numberOfAccidents = Object.keys(ScalesEnums_1.Accidents).length / 2;
        return Math.floor(Math.random() * numberOfAccidents);
    };
    Scale.getRandomAccident = function () {
        var numberOfAccidents = Object.keys(ScalesEnums_1.Accidents).length / 2;
        return Math.floor(Math.random() * numberOfAccidents);
    };
    return Scale;
}());
exports.Scale = Scale;