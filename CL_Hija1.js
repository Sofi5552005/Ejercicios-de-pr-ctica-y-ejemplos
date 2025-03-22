import CL_Padre from "./CL_Padre.js"
export default class Cl_hija1 extends CL_Padre{
    constructor(atribA, atribB1){
        super(atribA);
            this.atribB1 = atribB1;
        
    }
    metodo2(){
        return this.atribA * this.atribB1;
    }
}
