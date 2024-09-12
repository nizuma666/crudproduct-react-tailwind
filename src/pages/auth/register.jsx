import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import api from "../../config/api";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { username, email, password });
      swal.fire('Yeeyyy', 'Register Success','success')
      navigate('/login');
    } catch (error) {
      swal.fire("Upss...", "Something went wrong!", "error");
      console.error("Register failed:", error);
    }
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="flex flex-col gap-y-3">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="text-center md:text-left">
            <button
            onClick={handleSubmit}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
