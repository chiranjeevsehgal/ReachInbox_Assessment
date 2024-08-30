import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import OneBox from './pages/OneBox';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="" element={<OneBox />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
