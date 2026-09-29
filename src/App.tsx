import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Dorsbill_Mainpage/homePage/Home";
import Pricing from "./Pages/Pricing/Pricing";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}