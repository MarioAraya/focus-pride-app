/**
 * Evaluación "plan nutricional"
 */
export interface IFichaPlanNutricional {
    fecha: string
    calorias: string
    // data proporcionada por el alumno
    dataByAlumno: {
        alergiaAlimenticia: string
        noConsume: string
    }
    // data proporcionada por el entrenador
    dataByEntrenador: {
        comidasDelDia: IComidaDia[] 
        alimentosProhibidos: string
        observaciones: string
    }
}

interface IComidaDia {
    // puede ser: desayuno, snack, almuerzo, snack, cena
    tipoComida: string 
    hora: string
    // arreglo de string de la forma: [alimento||cantidad]
    alimentos: string[] 
    alimentosCaloriasTotal: number
}