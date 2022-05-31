"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lider = void 0;
const funcion_rio_1 = require("./funcion\u00E1rio");
class lider extends funcion_rio_1.funcionario {
    constructor(nome, idade, setor) {
        super(nome, idade, setor);
        this.lider = [];
    }
    static indicar(arg0) {
        throw new Error("Method not implemented.");
    }
    indicar(p1) {
        this.lider.push(p1);
    }
    static getInstance() {
        if (lider.lid)
            return lider.lid;
        else {
            lider.lid = new lider("liderPadrao", 0, "setorpadrao");
            return lider.lid;
        }
    }
}
exports.lider = lider;
