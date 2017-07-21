"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/globals/jasmine/index.d.ts" />
var sut = require("../app/logic");
var Scales = require("../app/scales");
describe("Test for logic app", function () {
    it("should return a string with a root", function () {
        // arrange
        var foundRoot = false;
        // act
        var selectedScale = sut.ScalesGenerator.getScale();
        // assert
        for (var i in Scales.Roots) {
            if (selectedScale[0] == i) {
                foundRoot = true;
                break;
            }
        }
        expect(foundRoot).toBeTruthy("Could not find scale");
    });
});
//# sourceMappingURL=logicTest.js.map