import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import CIDADANIA from './components/CIDADANIA'
import OPTIONS from './components/OPTIONS'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <header>
      <Header/>
    </header>
      <CIDADANIA />
      <OPTIONS />

   <footer>
      <Footer/>
   </footer>
    </>
  )
}

export default App
