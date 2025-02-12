import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Upload from './pages/Upload'
import UploadAdmin from './pages/admin/UploadAdmin'

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
          <Route path="/upload" element={<Upload />} />
          <Route path="/admin/uploads" element={<UploadAdmin />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 