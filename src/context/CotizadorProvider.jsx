import { useState, createContext } from "react";
import { getDiferenciaAno, calcularMarca, calcularPlan, formatearDinero } from "../helpers";

// se recomienda que el provider y el context tengan el mismo nombre (en esta caso "Cotizador")
const CotizadorContext = createContext();

/* Provider

Es el lugar donde se define el state
donde Se pueden tener algunos effects
donde Se pueden crear algunas funciones

Es de donde vienen o de donde nacen los datos 
*/

// El provider es una función comun y corriente (similar a un hook o un componente de React)
const CotizadorProvider = ({children}) => {

  const [ datos, setDatos ] = useState({
    marca: '',
    ano: '',
    plan: ''
  });

  const [ resultado, setResultado ] = useState(0);
  const [ error, setError ] = useState('');
  const [cargando, setCargando ] = useState(false);

  const handleChangeDatos = e => {

    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;

    // Obtener diferencia de años
    const diferencia = getDiferenciaAno(datos.ano);
    
    // Hay que restar el 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100
    
    // Americano 15% / Europeo 30% / Asiatico 5%
    resultado *= calcularMarca(datos.marca)
    
    // Basico 20% / Completo 50%
    resultado *= calcularPlan(datos.plan)

    // Formatear dinero
    resultado = formatearDinero(resultado);

    setCargando(true);
    setTimeout(() => setCargando(false), 2000);

    setResultado(resultado);
  }

  return (
    <CotizadorContext.Provider
    value={{
      datos,
      handleChangeDatos,
      cotizarSeguro,
      resultado,
      cargando,
      error,
      setError
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}

export {CotizadorProvider}
export default CotizadorContext
