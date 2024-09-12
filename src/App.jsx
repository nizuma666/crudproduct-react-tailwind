import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import AddProduct from "./pages/product/addProduct";
import EditProduct from "./pages/product/editProduct";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
