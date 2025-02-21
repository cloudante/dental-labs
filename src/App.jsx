import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Terms from './pages/Terms'

function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 