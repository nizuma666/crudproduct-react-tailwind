import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../config/api";
import swal from "sweetalert2";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        swal.fire("Upss..", "there something wrong!", "error");
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };
  const handleDelete = async (id) => {
    const result = await swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    });
  
    if (result.isConfirmed) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter((product) => product.id !== id));
        swal.fire(
          'Deleted!',
          'The product has been deleted.',
          'success'
        );
      } catch (error) {
        swal.fire(
          'Error!',
          'There was a problem deleting the product.',
          'error'
        );
        console.error('Failed to delete product:', error);
      }
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Product</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ul className="space-y-2">
          {products.slice(0, 5).map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <div className="flex-grow">
                <div>
                  <span className="font-medium">{product.name}</span>
                  <span className="text-gray-600 ml-2">${product.price}</span>
                </div>
                <p className="text-sm font-light">{product.description ? product.description : <p>No Description</p>}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          {products.length === 0 && (
            <li className="text-gray-600">No products available</li>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;
