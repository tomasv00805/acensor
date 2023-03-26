import {piso} from "./piso";
import {acensor} from "./acensor";
import {historial} from "./historial";

const PrimerPiso= new piso ("PrimerPiso");
const SegundoPiso= new piso("SegundoPiso");
const TercerPiso= new piso("TercerPiso");
const CuartoPiso= new piso("CuartoPiso");
const QuintoPiso= new piso("QuintoPiso");

PrimerPiso.setPisosiguiente(SegundoPiso);
SegundoPiso.setPisoanterior(PrimerPiso);
SegundoPiso.setPisosiguiente(TercerPiso);
TercerPiso.setPisoanterior(SegundoPiso);
TercerPiso.setPisosiguiente(CuartoPiso);
CuartoPiso.setPisoanterior(TercerPiso);
CuartoPiso.setPisosiguiente(QuintoPiso);
QuintoPiso.setPisoanterior(CuartoPiso);



test("del primer piso al 3er piso" , () => {
    const Historial = new historial();
    const Ascensor = new acensor(PrimerPiso, Historial);
    Ascensor.subir(TercerPiso);
    expect(Ascensor.pisoactual).toBe(TercerPiso);
    //histoiral
    expect(Historial.recorrido).toEqual(["PrimerPiso", "SegundoPiso", "TercerPiso"]);
});



test("del 3er piso al 5to piso" , () => {
    const Historial = new historial();
    const Ascensor = new acensor(TercerPiso, Historial);
    Ascensor.subir(QuintoPiso);
    expect(Ascensor.pisoactual).toBe(QuintoPiso);
    //histoiral
    expect(Historial.recorrido).toEqual(["TercerPiso", "CuartoPiso", "QuintoPiso"]);
});


test("del 5to piso al 1er piso" , () => {
    const Historial = new historial();
    const Ascensor = new acensor(QuintoPiso, Historial);
    Ascensor.bajar(PrimerPiso);
    expect(Ascensor.pisoactual).toBe(PrimerPiso);
    //histoiral
    expect(Historial.recorrido).toEqual(["QuintoPiso", "CuartoPiso", "TercerPiso", "SegundoPiso", "PrimerPiso"]);
});

test("subir al 4to y bajar al 2do piso" , () => {
    const Historial = new historial();
    const Ascensor = new acensor(PrimerPiso, Historial);
    Ascensor.subir(CuartoPiso);
    Ascensor.bajar(SegundoPiso);
    expect(Ascensor.pisoactual).toBe(SegundoPiso);
    //histoiral
    expect(Historial.recorrido).toEqual(["PrimerPiso", "SegundoPiso", "TercerPiso", "CuartoPiso", "TercerPiso", "SegundoPiso"]);
});