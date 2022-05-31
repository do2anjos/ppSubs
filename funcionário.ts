export class funcionario{
    private nome:string;
    private anoAdm:number;
    private cargo:string;

    constructor(nome:string, anoAdm:number, cargo:string){
        this.nome = nome;
        this.anoAdm = anoAdm;
        this.cargo = cargo;
    }
    apresentação(){
        return 'oi sou o ${this.nome} , fui aceito em ${this.anoAdm}'
    }
}