export function getDiferenciaAno(ano) {
  return new Date().getFullYear() - ano;
}

export function calcularMarca(marca) {
  const objMarcasIncremento = {
    1: 1.3,
    2: 1.15,
    3: 1.05
  }

  return objMarcasIncremento[+marca]
}

export function calcularPlan(plan) {
  return (plan === '1') ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}