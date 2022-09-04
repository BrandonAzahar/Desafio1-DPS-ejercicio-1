import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import data from './ComprasLista.json';
import { nanoid } from "nanoid";


const App = () => {


  const [Listas, setListas] = useState(data);

  const [añadirProducto , setañadirProducto] = useState({
    Producto: '',
    precio:   ''
  })

  const añadirProc = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('Producto');
    const fielValue = event.target.value;


    const NewFormData = {...añadirProducto};
    NewFormData[fieldName] = fielValue;

    setañadirProducto(NewFormData);

  };

  const botonañadirform = (event) => {
    event.preventDefault();
    const NuevoProc = {
      id: nanoid(),
      Producto: añadirProducto.Producto,
      precio : añadirProducto.precio,
    }

    const NuevoProducto = [...Listas , NuevoProc];
    setListas(NuevoProducto);


  }



  return (
    <div className="App-container">
      <table class="table">
        <thead>
          <tr>
            <th>producto</th>
            <th>precio</th>
            
          </tr>
        </thead>
        <tbody>
          {Listas.map((Lista)=>(
             <tr>
             <td>{Lista.Producto}</td>
             <td>{Lista.precio}</td>
            </tr>
            

          ))}
         
         
        </tbody>
      </table>
      <h2>Compras</h2>
      <form onsubmit={botonañadirform}>
      <input
          type="text"
          name="Producto"
          required="required"
          placeholder="añadir producto"
          onChange={añadirProc }
          
        />
         <input
          type="text"
          name="precio"
          required="required"
          placeholder="****"
          onChange={añadirProc }
          
        />
         <select>
                
                <option selected disabled ="true">---selecionar producto---</option>
                {
                    Listas.map((result) => (<option text={result.id}>{result.Producto},{result.precio}</option>) )
                
                }
            </select>
        <button type="submit">agregar</button>
            
      </form>

    </div>
  );
}

export default App;
