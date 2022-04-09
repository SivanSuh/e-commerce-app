import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./components/Basket";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
