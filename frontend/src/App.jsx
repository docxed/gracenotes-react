import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Mygraces from "./pages/Mygraces"
import Reports from "./pages/Reports"

function App() {
  return (
    <div>
      <Nav />
      <div className="mt-5 container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mygraces" element={<Mygraces />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
