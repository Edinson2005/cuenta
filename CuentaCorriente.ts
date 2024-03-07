export  default class CuentaCorriente {
    private saldo: number;
    private sobregiro: number;
    private comision_mensual: number;
    private transacciones: number;

    constructor(saldo_inicial: number = 0) {
        this.saldo = saldo_inicial;
        this.sobregiro = 0;
        this.transacciones = 0;
        this.comision_mensual = 0;
    }

    retirar(cantidad: number): void {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
        } else {
            this.sobregiro += cantidad - this.saldo;
            this.saldo = 0;
        }
        this.transacciones++;
    }

    consignar(cantidad: number): void {
        if (this.sobregiro > 0) {
            if (cantidad <= this.sobregiro) {
                this.sobregiro -= cantidad;
            } else {
                this.saldo += cantidad - this.sobregiro;
                this.sobregiro = 0;
            }
        } else {
            this.saldo += cantidad;
        }
        this.transacciones++;
    }

    extracto_mensual(monto_extracto_mensual: number): void {
        if (this.transacciones > 0) {
            this.comision_mensual = 0.5 * this.transacciones;
            this.saldo -= this.comision_mensual;
            this.transacciones = 0;
        }
    }

    imprimir(): void {
        console.log("El saldo es: " + this.saldo);
        console.log("La comisión mensual: " + this.comision_mensual);
        console.log("La cantidad de transacciones es de: " + this.transacciones);
        console.log("El sobregiro es de: " + this.sobregiro);
    }
}

const cuenta = new CuentaCorriente(1000);
cuenta.retirar(1500);
cuenta.consignar(1200);
cuenta.extracto_mensual(1400);
cuenta.imprimir();