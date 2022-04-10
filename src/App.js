import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Popup from "./components/Popup";

{
  /* This  Router page  */
}
function App({ id }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/basket" element={<Basket />} />
        <Route path={`/detail/:${id}`} element={<Popup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
