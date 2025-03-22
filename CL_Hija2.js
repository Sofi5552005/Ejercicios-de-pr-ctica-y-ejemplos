import CL_Padre from "./CL_Padre.js"
export default class Cl_hija2 extends CL_Padre{
    constructor(atribA, atribB2){
        super(atribA);
            this.atribB2 = atribB2;
        
    }
    metodo1(){
        return this.atribA + this.atribB2; 
    }  
}
