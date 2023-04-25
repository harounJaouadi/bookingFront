import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import List  from "./pages/List/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
function App() {
  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="hotels" element={<List></List>}></Route>
    <Route path="/hotels/:id" element={<Hotel/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>

}

export default App;
