/**
 * Se refiere a los eventos que se tendrán en la Agenda (alumno/profesor)
 * y a la peridiocidad de estos y sus notificaciones.
 */
export interface IAgenda {
    titulo: string
    codMembresia: string
    eventos: IEvento[]
}

interface IEvento {
    fechaCreacion: string
    fechaEvento: string
    tituloEvento: string
    // TODO: definir forma de representar peridiocidad
    peridiocidad: any 
    // listado de codMembresia a quienes les aparecerá el evento en su agenda
    usuariosImplicados: string[]
    // listado de codMembresia con usuarios a quienes se les debe notificar
    usuariosYaNotificados: string[]
}