import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/common/footer/footer'
import Contact from './components/common/contact/contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  const HomePage = lazy(()=> import("./pages/home"));
  const ServicePage = lazy(()=> import("./pages/services"))

  return (
    <div className='App'>
      <Suspense>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/services' Component={ServicePage} />
        </Routes>
      </Suspense>
      <Contact />
      <Footer />
    </div>
  )
}

export default App