import Cuenta from "./Cuenta";
import CuentaAhorros from "./CuentaDeAhorros";
import CuentaCorriente from './CuentaCorriente';



const cuentaAhorros = new CuentaAhorros(12000, 5);
const cuentaCorriente = new CuentaCorriente(5000);

console.log("----Cuenta de Ahorros----");
cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(1);
cuentaAhorros.retirar(1500);
cuentaAhorros.retirar(100);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();

console.log("----Cuenta Corriente----");
cuentaCorriente.consignar(2000);
cuentaCorriente.retirar(3000);
cuentaCorriente.retirar(4000);
cuentaCorriente.consignar(1000);
cuentaCorriente.extracto_mensual(1400); 
cuentaCorriente.imprimir();
const cuentaCorrienteE = new CuentaCorriente(1000);
cuentaCorrienteE.retirar(1500); 
cuentaCorrienteE.imprimir
