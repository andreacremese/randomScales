/// <reference path="../typings/globals/jasmine/index.d.ts" />
import * as sut from "../app/logic";
import * as Scales from "../app/scales";

describe("Test for logic", () => {
    it("should return a string with a root", () =>{
        // arrange
        var foundRoot = false;
        // act
        var selectedScale = sut.ScalesGenerator.getScale();
        // assert
        for (let i in Scales.Roots) {
            if (selectedScale[0] == i){
                foundRoot = true;
                break;
            }
        }
        expect(foundRoot).toBeTruthy("Could not find scale");
    });

    it("should throw when instantiated asd s", () => {
        var hasThown = false;
        try {
            var a = new sut.ScalesGenerator();
        } catch (e) {
            hasThown = true;
        }
        expect(hasThown).toBe(true);
    })  
})