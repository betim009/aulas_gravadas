import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App