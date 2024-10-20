import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Document from './components/Document'


function App() {
  const [showlanding, setShowlanding] = useState(true)

  return (
    <>
      <Background />
      <Navbar />
      {showlanding ? <Landing setLoading={setShowlanding} /> : <Form /> }
      <Footer />
    </>
  )
}

export default App
