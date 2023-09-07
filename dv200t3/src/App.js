import "./App.css";
import Landing from "./pages/landing";
import Admin from "./pages/admin";
import Products from "./pages/products";
import Login from "./pages/login";
import Cart from "./pages/cart";
import BasicNav from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";


function App() {
  return (
    <div className="App">
      <BasicNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={ <Products/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
