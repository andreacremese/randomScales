/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import { Scale } from "../../src/Scale";
import { Roots, Accidents, Alterations } from "../../src/ScalesEnums";

describe("Test for Scales lib", () => {

    it("allows valid scales", () => {
        var hasThown = false;
        try {
            // arrange
            var sut = new Scale(Roots.A, Accidents.b, Alterations.maj );
        } catch (e) {
            hasThown = true;
        }
        expect(hasThown).toBe(false, "Scale should not throw for legal scale ");
    })

    it("does not allow invalid scales", () => {
        var hasThown = false;
        try {
            // arrange
            var sut = new Scale(Roots.A, Accidents["#"], Alterations.maj );
        } catch (e) {
            hasThown = true;
        }
        expect(hasThown).toBe(true, "Scale should throw for illegal scale");
    })

    it("correctly formats a scale ", () =>{
        // arrange
        var sut = new Scale(Roots.A, Accidents.b, Alterations.maj );
        // act
        var result = sut.toString();
        // assert
        expect(result).toBe("Ab maj","string representation of scale does not match spec");
    });

    it("returns a random scale with a known root", () =>{
        // arrange
        // act
        var result = Scale.getRandomScale().toString();
        // assert
        var foundRoot = false;
        for (let i in Roots) {
            if (result[0] == i){
                foundRoot = true;
                break;
            }
        }
        expect(foundRoot).toBeTruthy(`Could not find root in ${result}`);
    });

    it("should return a scale with a known string as accident ", () =>{
        // arrange
        var foundAccident = false;
        // act
        var result = Scale.getRandomScale().toString();
        // assert
        for (let i in Accidents) {
            if (result[1] == i){
                foundAccident = true;
                break;
            }
        }
        if (result[1] == " ") foundAccident = true;
        expect(foundAccident).toBeTruthy(`Could not find accident in ${result}`);
    });


    it("should return a scale with a known string as alterations ", () =>{
        // arrange
        var foundAccident = false;
        // act
        var result = Scale.getRandomScale().toString();
        // assert
        for (let i in Alterations) {
            if (result.slice(result.length-3) == i){
                foundAccident = true;
                break;
            }
        }
        expect(foundAccident).toBeTruthy(`Could not find alteration in ${result}`);
    });
}) 