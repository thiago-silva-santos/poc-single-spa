import * as singleSpa from 'single-spa'
import React, { useState } from 'react'
import './App.css'

const App = () => {

     const [count, setCount] = useState(0)
     const increment = () => setCount( count + 1)
     const decrement = () => setCount( count - 1)

     const changePage = (pagina) => {
          singleSpa.navigateToUrl(pagina)
     }

     return (
          <div className='main'>
               <section className='appReact'>
                    <div className='referencias'>
                         <h1>Esse é o app em React</h1>
                         <p>Contador: {count} </p>
                    </div>

                    <div className='buttons'>
                         <button onClick={increment}>
                              Aumentar
                         </button>
                         <button onClick={decrement}>
                              Diminuir
                         </button>
                    </div>

               </section>

          </div>
     )
}

export default App