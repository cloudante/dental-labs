import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Specialties from './pages/Specialties'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import ProductDetail from './pages/ProductDetail'
import TestPage from './pages/TestPage'

function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App 