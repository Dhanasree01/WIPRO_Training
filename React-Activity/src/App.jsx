




import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/about" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <About />
          </ProtectedRoute>
        } />

        <Route path="/cart" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Cart />
          </ProtectedRoute>
        } />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      {/* FOOTER MUST BE HERE 👇 */}
      <Footer />
    </BrowserRouter>
  );
}



