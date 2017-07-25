import  { Roots, Accidents, Alterations } from "./ScalesEnums";
import { Scale } from "./scale";

export { ScalesLib }

class ScalesLib {
    
    constructor() {
        throw new Error("cannot instantiate scales generator");
    }

    private static getRandomRoot() : string {
        let numberOfRoots = Object.keys(Roots).length / 2;
        return Roots[Math.floor(Math.random() * numberOfRoots)];
    } 

    private static getRandomAlteration() : string {
        let numberOfAccidents = Object.keys(Accidents).length / 2;
        return Alterations[Math.floor(Math.random() * numberOfAccidents)]; 
    }

    private static getRandomAccident() : string {
        let numberOfAccidents = Object.keys(Accidents).length / 2;
        return Accidents[Math.floor(Math.random() * numberOfAccidents)]
    }

    public static getRandomScale() : Scale  {
        var result = new Scale();
        result.root = this.getRandomRoot();
        result.accident = this.getRandomAccident();
        result.alteration = this.getRandomAlteration();
        return result;
    }
}