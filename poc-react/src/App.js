import * as singleSpa from 'single-spa'
import React, { useState } from 'react'

const App = () => {

     const [count, setCount] = useState(0)
     const increment = () => setCount( count + 1)
     const decrement = () => setCount( count - 1)

     const changePage = (pagina) => {
          singleSpa.navigateToUrl(pagina)
     }

     return (
          <div>
               <h1>Esse é o app em React</h1>
               <p>Contador: {count} </p>
               <button onClick={increment}>
                    Aumentar
               </button>
               <button onClick={decrement}>
                    Diminuir
               </button>
               <button onClick={() => changePage('app3')}>
                    ir para vue
               </button>
               <button onClick={() => changePage('app1')}>
                    voltar
               </button>
          </div>
     )
}

export default App