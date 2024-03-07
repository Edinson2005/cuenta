import Cuenta from "./Cuenta";
import CuentaAhorros from "./CuentaDeAhorros";
import CuentaCorriente from './CuentaCorriente';


// Prueba de funcionalidades
const cuentaAhorros = new CuentaAhorros(12000, 5);
const cuentaCorriente = new CuentaCorriente(5000);

console.log("----Cuenta de Ahorros----");
cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(500);
cuentaAhorros.retirar(1500);
cuentaAhorros.retirar(100);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();

console.log("----Cuenta Corriente----");
cuentaCorriente.consignar(2000);
cuentaCorriente.retirar(3000);
cuentaCorriente.retirar(4000);
cuentaCorriente.consignar(1000);
cuentaCorriente.extracto_mensual(1400); // Corrected method name
cuentaCorriente.imprimir();
