import * as singleSpa from 'single-spa'
import React, { useState } from 'react'
import './global.css'
import './App.css'

const App = () => {

    const links = [
        {
            title: 'React',
            rota: 'app-react'
        },
        {
            title: 'Vue',
            rota: 'app-vue'
        },
        {
            title: 'Angular',
            rota: 'poc-angular'
        },
        {
            title: 'Voltar',
            rota: '/'
        },
        
    ]
     const changePage = (pagina) => {
          singleSpa.navigateToUrl(pagina)
     }

     return (
          <div className='navbar'>
              <section className='navbarContainer'>
                  <div className='logo'>
                    <button className='buttonLogo' onClick={() => changePage('/')} >
                            Navbar
                    </button>

                  </div>
                  <div className='links'>
                    {links.map((item) => (
                        <button className='buttonLinks' onClick={() => changePage(item.rota)} key={item}>
                            {item.title}
                        </button>
                    ))}
                  </div>
              </section>
          </div>
     )
}

export default App