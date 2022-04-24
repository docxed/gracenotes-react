import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Mygraces from "./pages/Mygraces"
import Reports from "./pages/Reports"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {
  return (
    <div>
      <Nav />
      <div className="mt-5 container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mygraces" element={<Mygraces />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
