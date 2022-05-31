import { empresa } from "./models/empresa";
import { funcionario } from "./models/funcionário"
import { lider } from "./models/lider"
import { adapterEmpresa } from "./models/utlis/adapterEmpresa";

console.log("oi, teste!")

let chefe:lider = lider.getInstance; // não sei o que pode ser. ja declarei static, mas acho que tem haver com as ""
lider.indicar(new funcionario("indicado, 25"))
console.log("chefe", chefe)

let chefe2:lider = lider.getInstance;


let p1:funcionario = new funcionario('Matheus', 20, 'Ti')
let p2:funcionario = new funcionario('Marcos', 21, 'dp')
chefe2.indicar(p1);
chefe2.indicar(p2);
console.log("chefe2", chefe2)

console.log(apresentaçãoFuncionaario(p1));

let emp1:empresa = new empresa();
console.log('primeira empresa')
console.log('adaptador Empresa1', adapterEmp1)
//console.log(apresentaçãoFuncionaario(emp1))

let adapterEmp1: adapterEmpresa = new adapterEmpresa(emp1);
console.log(apresentaçãoFuncionaario(adapterEmp1))

function apresentaçãoFuncionaario(p:funcionario){
    return p.apresentação
}