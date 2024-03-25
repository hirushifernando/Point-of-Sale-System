import Navbar from "./Navbar"
import Stock from "./pages/Stock"
import Home from "./pages/Home"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </div>
    </>
  )
}

export default App
