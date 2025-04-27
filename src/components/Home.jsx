import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'
import '../css/header.css'
import '../css/main.css'
import '../css/footer.css'

import v2 from "../assets/v2.jpeg";







export const Home = () => {

    let alumno = {
        nombre: 'Jeremias',
        apellido: 'Alvarez',
        imagen:v2,


    }

  return (


    <div>
        
        <Header datos={alumno}/>      
        
        <Main datos= {alumno}/>
        
        <Footer/>
        
    </div>
  )
}
