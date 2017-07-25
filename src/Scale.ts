export { Scale }

class Scale {
    root : string;
    accident : string;
    alteration : string;
    
    public toString() : string {
        return `${this.root}${this.accident} ${this.alteration}`; 
    }
}