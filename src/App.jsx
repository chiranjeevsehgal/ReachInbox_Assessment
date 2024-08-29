import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Onebox from './pages/onebox';

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
