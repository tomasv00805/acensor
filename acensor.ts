//crear class asensor 
import { piso } from "./piso";
import { historial } from "./historial";
export class acensor {
    pisoactual: piso;
    Historial: historial;

    constructor (pisoactual: piso, Historial: historial) {
        this.pisoactual = pisoactual;
        this.Historial = Historial;
    }

    subir(piso: piso) {
        let pisoactual = this.pisoactual;
        let pisosiguiente= pisoactual.getPisosiguiente();
        while (pisosiguiente != null) {
            if (pisosiguiente == piso) {
                if(this.Historial.recorrido[this.Historial.recorrido.length-1] != pisoactual.getNombre()){
                    this.Historial.recorrido.push(pisoactual.getNombre());
                }
                this.Historial.recorrido.push(piso.getNombre());
                this.pisoactual = piso;
                break;
            } else {
                //comprobar la ultima posicion del hitorial es igual al piso actual
                if(this.Historial.recorrido[this.Historial.recorrido.length-1] != pisoactual.getNombre()){
                    this.Historial.recorrido.push(pisoactual.getNombre());
                }
                pisoactual = pisosiguiente;
                pisosiguiente = pisoactual.getPisosiguiente();
            }
        }
    }

    bajar(piso: piso) {
        let pisoactual = this.pisoactual;
        let pisoanterior= pisoactual.getPisoanterior();
        while (pisoanterior != null) {
            if (pisoanterior == piso) {
                if(this.Historial.recorrido[this.Historial.recorrido.length-1] != pisoactual.getNombre()){
                this.Historial.recorrido.push(pisoactual.getNombre());
                }
                this.Historial.recorrido.push(piso.getNombre());
                this.pisoactual = piso;
                break;
            } else {
                if(this.Historial.recorrido[this.Historial.recorrido.length-1] != pisoactual.getNombre()){
                this.Historial.recorrido.push(pisoactual.getNombre());
                }
                pisoactual = pisoanterior;
                pisoanterior = pisoactual.getPisoanterior();
            }
        }
    }

}