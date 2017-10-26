/**
 * hoja de entrenamiento a realizar, 
 * se deben guardar las anteriores para consulta
 */
export interface IProgramaEntrenamiento {
    fechaEvaluacion: string
    fechaEntregaRutina: string
    objetivos: string
    // arreglo de la forma [Ejercicio||Minutos]
    calentamientoFisico: string[]
    // arreglo de la forma [Ejercicio||Minutos]
    enfriamientoFisico: string[]
    // arreglo de IEjercicios (peso, series, repeticiones)
    ejercicios: IEjercicio[]
}

export interface IEjercicio {
    nombre: string
    // arreglo de la forma [Peso||Series||Repeticiones] 
    pesoSeriesRepeticiones: string[] 
}