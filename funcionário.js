"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionario = void 0;
class funcionario {
    constructor(nome, anoAdm, cargo) {
        this.nome = nome;
        this.anoAdm = anoAdm;
        this.cargo = cargo;
    }
    apresentação() {
        return 'oi sou o ${this.nome} , fui aceito em ${this.anoAdm}';
    }
}
exports.funcionario = funcionario;
