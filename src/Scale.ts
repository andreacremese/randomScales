import { Roots, Accidents, Alterations } from "./ScalesEnums"; 

export { Scale }

class Scale {
    private root : Roots;
    private accident : Accidents;
    private alteration : Alterations;

    /**
     *
     */
    constructor(root: Roots, accident : Accidents, alteration: Alterations) {
        if (!Scale.isValidAccident(root, accident)) {
            throw new Error("illegal scale");
        }
        this.root = root;
        this.accident = accident;
        this.alteration = alteration;
    }
    
    public toString() : string {
        return `${Roots[this.root]}${Accidents[this.accident]} ${Alterations[this.alteration]}`;
    }

    // A Bb B C C# D Eb E F F# G Ab 
    public static isValidAccident(root1 : Roots, accident : Accidents) {
        
        var allowedAccidents : { [index : string] : { allowedAccident? : Accidents } } = {};
        allowedAccidents[Roots.A] = {allowedAccident : Accidents.b};
        allowedAccidents[Roots.B] = {allowedAccident : Accidents.b};
        allowedAccidents[Roots.C] = {allowedAccident : Accidents["#"]};
        allowedAccidents[Roots.D] = {allowedAccident : undefined };
        allowedAccidents[Roots.E] = {allowedAccident : Accidents.b };
        allowedAccidents[Roots.F] = {allowedAccident : Accidents["#"] };
        allowedAccidents[Roots.G] = {allowedAccident : undefined };

        return accident == Accidents[""] || accident == allowedAccidents[root1].allowedAccident;
    }

    // statics

    private static getRandomRoot() : Roots {
        let numberOfRoots = Object.keys(Roots).length / 2;
        return Math.floor(Math.random() * numberOfRoots);
    } 

    private static getRandomAlteration() : Alterations {
        let numberOfAccidents = Object.keys(Accidents).length / 2;
        return Math.floor(Math.random() * numberOfAccidents); 
    }

    private static getRandomAccident() : Accidents {
        let numberOfAccidents = Object.keys(Accidents).length / 2;
        return Math.floor(Math.random() * numberOfAccidents);
    }

    public static getRandomScale() : Scale  {
        let root : Roots;
        let accident : Accidents;
        do {
            root = this.getRandomRoot();
            accident = this.getRandomAccident();
        } while (!this.isValidAccident(root,accident));

        return new Scale(root, accident, this.getRandomAlteration());
    }
}