export const ARR_MARCAS = [
  { id: 1, nombre: 'Europeo' },
  { id: 2, nombre: 'Americano' },
  { id: 3, nombre: 'Asiatico' },
]

const YEARMAX = new Date().getFullYear()
export const ARR_YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index)

export const ARR_PLANES = [
  { id: 1, nombre: 'Básico' },
  { id: 2, nombre: 'Completo' },
]