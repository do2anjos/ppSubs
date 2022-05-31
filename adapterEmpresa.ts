import { empresa } from "../empresa";
import { funcionario } from "../funcionário";

export class adapterEmpresa extends funcionario{
    private emp:empresa;

    constructor(neg: empresa){
        super(neg.fantasia, 2015, "dono")
        this.emp = neg
    }

    apresentação(){
        return 'oi sou o ${this.fantasia}  fui criada em ${this.fundação}'
    
}