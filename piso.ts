//clase piso 

export class piso {
    nombre: string;
    pisosiguiente: piso | undefined;
    pisoanterior: piso | undefined;
    
    constructor (nombre: string) {
        this.nombre = nombre;
        
    }

    setPisoanterior(pisoanterior: piso) {
        this.pisoanterior = pisoanterior;
    }

    setPisosiguiente(pisosiguiente: piso) {
        this.pisosiguiente = pisosiguiente;
    }

    getPisoanterior() {
        return this.pisoanterior;
    }

    getPisosiguiente() {    
        return this.pisosiguiente;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

}
