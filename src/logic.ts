import  *  as Scales from "./scales";

export { ScalesGenerator }

class ScalesGenerator {
    
    constructor() {
        throw new Error("cannot instantiate Logic class");
    }

    public static getScale() : string{
        let numberOfRoots = Object.keys(Scales.Roots).length / 2;
        let numberOfAccidents = Object.keys(Scales.Accidents).length / 2;
        
        return Scales.Roots[Math.floor(Math.random() * numberOfRoots)] + Scales.Accidents[Math.floor(Math.random() * numberOfAccidents)]
    } 

    public static getAlteration() : string {
        let numberOfAccidents = Object.keys(Scales.Accidents).length / 2;
        return Scales.Alterations[Math.floor(Math.random() * numberOfAccidents)]; 
    }
}