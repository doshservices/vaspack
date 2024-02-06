import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import About from "./app/about/page";
import News from "./app/news/page";
import Sustainability from "./app/sustainability/page";
import Contact from "./app/contact/page";
import './app/globals.css'
import Products from "./app/products/page";
import Kerosene from "./app/products/kerosene/page";
import Lubricants from "./app/products/lubricants/page";
import Liquefied from "./app/products/liquefied/page";
import Petrol from "./app/products/petrol/page";
import VMI from "./app/products/vmi/page";
import Commercial from "./app/commercial/page";
import Order from "./app/Order/page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/liquefied" element={<Liquefied />} />
          <Route path="/products/petrol" element={<Petrol />} />
          <Route path="/products/kerosene" element={<Kerosene />} />
          <Route path="/products/lubricants" element={<Lubricants />} />
          <Route path="/products/vmi" element={<VMI />} />
          <Route path="/news" element={<News />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/order" element={<Order />} />

          {/* <Route path="/redirect" element={ <Navigate to="/admin-homepage" /> }/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
