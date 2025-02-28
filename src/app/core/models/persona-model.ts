export interface Persona {
    id: number;
    tipoDocumentoDeIdentidad: string;
    documentoDeIdentidad: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombre: string;
    nroCelular: string;
    departamento: string;
    provincia: string;
    distrito: string;
    direccion: string;
}

export interface Trabajador {
    id: number;
    nroDocumento: string;
    razonSocial: string;
    correoInstitucional: string;
    nroCelular: string;
    departamento: string;
    provincia: string;
    distrito: string;
    direccion: string;
}