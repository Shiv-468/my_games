import React from 'react'
import Header from './components/Header'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Footer from './components/Footer'
// import Accd from './components/Accd'
import Lastcard from './components/Lastcard'
const App = () => {
  return (
    <>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      {/* <Accd/> */}
      <Lastcard/>
      <Footer />
    </>
  )
}

export default App
