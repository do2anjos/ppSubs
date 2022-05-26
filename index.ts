import { funcionario } from "./models/funcionário"
import { lider } from "./models/lider"

console.log("oi, teste!")

let chefe:lider = lider.getInstance

let p1:funcionario = new funcionario('Matheus', 20, 'Ti')
let p2:funcionario = new funcionario('Marcos', 21, 'dp')