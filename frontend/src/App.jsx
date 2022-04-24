import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
