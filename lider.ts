import { funcionario } from "./funcionário";

export class lider extends funcionario{

    private static lid:lider
    lider:funcionario[];
    static lider: funcionario;


    constructor(nome:string, idade:number, setor:string){
        super(nome, idade, setor);
        this.lider = [];
    }
     indicar(p1:funcionario){
        this.lider.push(p1);
    }

     static getInstance():lider {
        if(lider.lid)
          return lider.lid;
        else {
            lider.lid =  new lider("liderPadrao", 0, "setorpadrao")
            return lider.lid
        }
          
    }
}
