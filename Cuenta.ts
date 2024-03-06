export default class Cuenta {
    protected saldo: number;
    protected numeroConsignaciones: number = 0;
    protected numeroRetiros: number = 0;
    protected tasaAnual: number;
    protected comisionMensual: number = 0;

    constructor(saldoInicial: number, tasaAnual: number) {
        this.saldo = saldoInicial;
        this.tasaAnual = tasaAnual;
    }

    consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numeroConsignaciones++;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.numeroRetiros++;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    calcularInteresMensual(): void {
        const interesMensual = (this.saldo * this.tasaAnual) / 12 / 100;
        this.saldo += interesMensual;
    }

    extractoMensual(): void {
        this.saldo -= this.comisionMensual;
        this.calcularInteresMensual();
    }

    imprimir(): void {
        console.log("Saldo:", this.saldo);
        console.log("Comisión Mensual:", this.comisionMensual);
        console.log("Número de transacciones realizadas:", this.numeroConsignaciones + this.numeroRetiros);
    }
}