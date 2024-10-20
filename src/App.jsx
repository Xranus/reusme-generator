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
  const [allInfo, setAllinfo] = useState({})
  
  return (
    <>
      <Background />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/form' element={<Form infofn={setAllinfo} />} />
          <Route path='/document' element={<Document obg={allInfo} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
