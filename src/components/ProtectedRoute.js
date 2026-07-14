import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Penjelasan";
import Favorite from "./pages/Favorite";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/category"
        element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        }
      />

      <Route
        path="/detail/:id"
        element={
          <ProtectedRoute>
            <Detail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/favorite"
        element={
          <ProtectedRoute>
            <Favorite />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;