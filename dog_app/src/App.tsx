import Home from "./Home"
import  "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./Create"
import Update from "./Update"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update/:id' element={<Update />} />
    </Routes>
    </BrowserRouter>
     
  )
}

export default App