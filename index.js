"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcion_rio_1 = require("./models/funcion\u00E1rio");
const lider_1 = require("./models/lider");
console.log("oi, teste!");
let chefe = lider_1.lider.getInstance; // não sei o que pode ser. ja declarei static, mas acho que tem haver com as ""
lider_1.lider.indicar(new funcion_rio_1.funcionario("indicado, 25"));
console.log("chefe", chefe);
let chefe2 = lider_1.lider.getInstance;
let p1 = new funcion_rio_1.funcionario('Matheus', 20, 'Ti');
let p2 = new funcion_rio_1.funcionario('Marcos', 21, 'dp');
chefe2.indicar(p1);
chefe2.indicar(p2);
console.log("chefe2", chefe2);
console.log(apresentaçãoFuncionaario(p1));
function apresentaçãoFuncionaario(p) {
    return p.apresentação;
}
