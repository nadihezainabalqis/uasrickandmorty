import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Penjelasan";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
}

export default App;