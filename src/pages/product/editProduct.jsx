import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../config/api";
import swal from "sweetalert2";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = { ...product };

    try {
      await api.put(`/products/${id}`, updatedProduct);
      swal.fire("Yeeyyy", "Add Product success", "success");
      navigate("/dashboard");
    } catch (error) {
      swal.fire("Upss..", "there something wrong!", "error");
      console.error("Error updating product:", error);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </main>
  );
};

export default EditProduct;
