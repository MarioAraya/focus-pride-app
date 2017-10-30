/**
 * Foto de perfil, data usuario, fotos, codigoMembresía
 * tipo persona (Alumno/Entrenador)
 */
export interface IPerfil extends IPersona{
    listAmigos: IPersona[]
    listFotos: IFoto[]
}

export interface IPersona {
    nombre: string
    edad: number
    urlFotoPerfil: string
    codMembresia: string
    // puede ser [Alumno | Profesor | Tienda | Gymnasio]
    tipoPersona: string 
    ubicacion: string
    estaActivo: boolean
}

export interface IFoto {
    url: string
    titulo: string
    fecha: string
}
