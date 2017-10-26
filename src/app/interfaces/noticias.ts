/**
 * Todas las actualizaciones de estados de los usuarios. 
 * Ofertas de tiendas, gimnasios, actividades deportivas
 * 
 */
export interface INoticias {
    noticias: INoticia[]
}

/** 
 * Publicación == Noticia 
 *
 * */
export interface INoticia {
    url: string
    titulo: string
    texto: string
    codMembresia: string
    fechaCreacion: string
    tipoNoticia: string
}