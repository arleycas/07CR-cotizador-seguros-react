import { Fragment } from 'react'
import { ARR_MARCAS, ARR_YEARS, ARR_PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

export default function Formulario() {

  const { datos, handleChangeDatos, cotizarSeguro, error, setError } = useCotizador();

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(datos).includes('')) return setError('Todos los campos son obligatorios');

    setError('');

    // TODO: Cotizar
    cotizarSeguro();
  }

  return (
    <>
      {error && <Error /> }
      <form 
        onSubmit={handleSubmit}>
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>

          <select
            name="marca" 
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeDatos(e)}
            value={datos.marca} >
            <option value=''>-- Selecciona Marca ---</option>
            {ARR_MARCAS.map(marca => (
              <option key={marca.id} value={marca.id}>{marca.nombre}</option>
            ))}
            
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>

          <select
            name="ano" 
            className="w-full p-3 bg-white border border-gray-200" 
            onChange={e => handleChangeDatos(e)}
            value={datos.ano} >
            <option value=''>-- Selecciona año ---</option>
            {ARR_YEARS.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
            
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>

          <div className='flex gap-3'>
            {ARR_PLANES.map(plan => (
              <Fragment key={plan.id}>
                <label htmlFor=''>
                  {plan.nombre}
                </label>

                <input 
                  type='radio' 
                  name='plan' 
                  value={plan.id} 
                  onChange={e => handleChangeDatos(e)}/>
              </Fragment>
            ))}
          </div>
        </div>

        <input 
          type='submit' 
          className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
          value='Cotizar'/>

      </form>
    </>
  )
}
