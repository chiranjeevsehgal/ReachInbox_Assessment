import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Onebox from './pages/OneBox';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="" element={<Login />} />
          <Route path="/onebox" element={<Onebox />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
