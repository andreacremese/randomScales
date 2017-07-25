/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import { ScalesLib } from "../../src/ScalesLib";
import { Roots, Accidents, Alterations } from "../../src/ScalesEnums";

describe("Test for Scales lib", () => {
    
    it("should throw when instantiated asd s", () => {
        var hasThown = false;
        try {
            var a = new ScalesLib();
        } catch (e) {
            hasThown = true;
        }
        expect(hasThown).toBe(true);
    })    
    
    it("should return a scale with a known string as root ", () =>{
        // arrange
        var foundRoot = false;
        // act
        var selectedScale = ScalesLib.getRandomScale().root;
        // assert
        for (let i in Roots) {
            if (selectedScale == i){
                foundRoot = true;
                break;
            }
        }
        expect(foundRoot).toBeTruthy("Could not find scale ");
    }); 

    it("should return a scale with a known string as accident ", () =>{
        // arrange
        var foundAccident = false;
        // act
        var result = ScalesLib.getRandomScale().accident;
        // assert
        for (let i in Accidents) {
            if (result == i){
                foundAccident = true;
                break;
            }
        }
        expect(foundAccident).toBeTruthy("Could not find accident");
    });

    it("should return a scale with a known string as alterations ", () =>{
        // arrange
        var foundAccident = false;
        // act
        var result = ScalesLib.getRandomScale().alteration;
        // assert
        for (let i in Alterations) {
            if (result == i){
                foundAccident = true;
                break;
            }
        }
        expect(foundAccident).toBeTruthy("Could not find alteration");
    });
})