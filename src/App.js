import logo from './logo.svg';
import './App.css';
import Menu from './component/NavBar';
import NameList from './component/NameList';

function App() {
  /* console.log("Test message");
  const condicion = true
  let resultado = null

  if (condicion) {
    resultado = 'verdadero'
  } else {
    resultado = 'falso'
  }
  console.log(`esto es el resultado: ${condicion ? 'correcto' : 'incorrecto'}`);

  const array = ['b', 'c', 'd'];
  let a = 'a'

  const arrayNuevo = [a, ...array]
  console.log(arrayNuevo);
 */

  const condicion = false
  console.log(`esto es el resultado: ${condicion ? 'correcto' : 'incorrecto'}`);

  /* objeto */
  let a = 'fede'

  const obj = {
    nombre: 'Fede',
    apellido: 'Osandón',
    ['id_' + a]: 'kjhsad',  // Bautiza campo como id_fede
    edad: undefined
  }
  console.log(obj);


  const { apellido, nombre } = obj  // Destructuring del objeto
  console.log(apellido);

  const { apellido: tercerNombre, edad = 36 } = obj   // Rebautiza el campo
  console.log('tercerNombre = ', tercerNombre);
  console.log('edad = ', edad);



  const obj2 = { backgroundColor: 'blue' }

  return (
    <div className="App" style={obj2} onClick={() => {
      console.log('clickeado', this);
    }}>
      PICMICROS - Tienda de electrónica
      <img />
      {/* <Menu /> */}

      <section>
        <input />
        <NameList />
      </section>
    </div>
  )
}
export default App;
