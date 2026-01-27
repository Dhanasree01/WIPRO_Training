import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import {
  ProtectedAdminPage,
  ProtectedEmployeePage,
  ProtectedCoursesPage,
} from "../Pages/ProtectedPages";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employees" element={<ProtectedEmployeePage />} />
      <Route path="/courses" element={<ProtectedCoursesPage />} />
      <Route path="/admin" element={<ProtectedAdminPage />} />
    </Routes>
  );
}

export default AnimatedRoutes;
