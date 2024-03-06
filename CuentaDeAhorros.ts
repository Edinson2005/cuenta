import Cuenta from './Cuenta';

export default class CuentaAhorros extends Cuenta {
    private activa: boolean;

    constructor(saldoInicial: number, tasaAnual: number) {
        super(saldoInicial, tasaAnual);
        this.activa = saldoInicial >= 10000;
    }

    consignar(cantidad: number): void {
        if (this.activa) {
            super.consignar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva");
        }
    }

    retirar(cantidad: number): void {
        if (this.activa) {
            super.retirar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva");
        }
    }

    extractoMensual(): void {
        if (this.numeroRetiros > 4) {
            this.comisionMensual += (this.numeroRetiros - 4) * 1000;
        }
        this.activa = this.saldo >= 10000;
        super.extractoMensual();
    }

    imprimir(): void {
        super.imprimir();
        console.log("Saldo activo:", this.activa);
    }
}
