/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import { Scale } from "../../src/Scale";

describe("Test for Scales lib", () => {

    it("correctly formats a scale ", () =>{
        // arrange
        var sut = new Scale();
        sut.root = "Root";
        sut.accident = "Acc";
        sut.alteration = "Alt"
        // act
        var result = sut.toString();
        // assert
        expect(result).toBe("RootAcc Alt","string representation of scale does not match spec");
    });
})