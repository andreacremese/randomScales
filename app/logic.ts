export { ScalesGenerator }

class ScalesGenerator {
    private static scales : string[]  = ["A", "B" , "C", "D", "E", "F", "G"];
    private static accidents : string[] = ["", "#", "b"];
    private static typeOfScales : string[]  = ["maj", "min" , "dom"];
    
    constructor() {
        throw new Error("cannot instantiate Logic class");
    }

    public static getScale() : string{
        return this.scales[Math.floor(Math.random() * this.scales.length)] + this.accidents[Math.floor(Math.random() * this.accidents.length)] ;
    } 

    public static getAlteration() : string {
        return this.typeOfScales[Math.floor(Math.random() * this.typeOfScales.length)]
    }
}