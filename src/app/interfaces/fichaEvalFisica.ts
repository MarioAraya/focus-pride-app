/**
 * Evaluación ficha "fisica"
 */
export interface IFichaEvalFisica {
    fecha: string
    edad: number
    // data entregada por el alumno, online
    dataByAlumno: {
        altura: string
        peso: string
        porcGrasa: number
        porcMusculo: number
        cmCintura: number
        cmCadera: number
        cmBrazos: number
        cmMuslos: number
        cmGluteos: number
        urlFotoFrontal: string
        urlFotoLateral: string
        urlFotoPosterior: string
    }
    // data tomada por el entrenador
    dataByEntrenador: {
        imc: number
        mmBicipital: number
        mmTricipital: number
        mmSubescapular: number
        mmSuprailiaco: number
        mmMuslo: number
        mmAbdominal: number
        mmPectoral: number
        mmAxilar: number
        mmPierna: number
        porcGrasa: number
        observaciones: string
    }
}