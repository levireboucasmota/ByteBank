import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(agencia, cliente) {
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}