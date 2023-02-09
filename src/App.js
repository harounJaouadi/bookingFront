import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import List  from "./pages/List/List";
function App() {
  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="hotels" element={<List></List>}></Route>

  </Routes>
  </BrowserRouter>

}

export default App;
