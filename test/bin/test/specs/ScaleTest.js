"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../typings/globals/jasmine/index.d.ts" />
var Scale_1 = require("../../src/Scale");
var ScalesEnums_1 = require("../../src/ScalesEnums");
describe("Test for Scales lib", function () {
    it("allows valid scales", function () {
        var hasThown = false;
        try {
            // arrange
            var sut = new Scale_1.Scale(ScalesEnums_1.Roots.A, ScalesEnums_1.Accidents.b, ScalesEnums_1.Alterations.maj);
        }
        catch (e) {
            hasThown = true;
        }
        expect(hasThown).toBe(false, "Scale should not throw for legal scale ");
    });
    it("does not allow invalid scales", function () {
        var hasThown = false;
        try {
            // arrange
            var sut = new Scale_1.Scale(ScalesEnums_1.Roots.A, ScalesEnums_1.Accidents["#"], ScalesEnums_1.Alterations.maj);
        }
        catch (e) {
            hasThown = true;
        }
        expect(hasThown).toBe(true, "Scale should throw for illegal scale");
    });
    it("correctly formats a scale ", function () {
        // arrange
        var sut = new Scale_1.Scale(ScalesEnums_1.Roots.A, ScalesEnums_1.Accidents.b, ScalesEnums_1.Alterations.maj);
        // act
        var result = sut.toString();
        // assert
        expect(result).toBe("Ab maj", "string representation of scale does not match spec");
    });
    it("returns a random scale with a known root", function () {
        // arrange
        // act
        var result = Scale_1.Scale.getRandomScale().toString();
        // assert
        var foundRoot = false;
        for (var i in ScalesEnums_1.Roots) {
            if (result[0] == i) {
                foundRoot = true;
                break;
            }
        }
        expect(foundRoot).toBeTruthy("Could not find root in " + result);
    });
    it("should return a scale with a known string as accident ", function () {
        // arrange
        var foundAccident = false;
        // act
        var result = Scale_1.Scale.getRandomScale().toString();
        // assert
        for (var i in ScalesEnums_1.Accidents) {
            if (result[1] == i) {
                foundAccident = true;
                break;
            }
        }
        if (result[1] == " ")
            foundAccident = true;
        expect(foundAccident).toBeTruthy("Could not find accident in " + result);
    });
    it("should return a scale with a known string as alterations ", function () {
        // arrange
        var foundAccident = false;
        // act
        var result = Scale_1.Scale.getRandomScale().toString();
        // assert
        for (var i in ScalesEnums_1.Alterations) {
            if (result.slice(result.length - 3) == i) {
                foundAccident = true;
                break;
            }
        }
        expect(foundAccident).toBeTruthy("Could not find alteration in " + result);
    });
});