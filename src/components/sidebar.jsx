import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const result = await swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, cancel!'
    });
  
    if (result.isConfirmed) {
      localStorage.removeItem('token');
      navigate('/login');
      swal.fire(
        'Logged out!',
        'You have been logged out.',
        'success'
      );
    }
  };
  return (
    <aside className="w-64 bg-gray-800 h-screen p-4 text-white">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 hover:bg-gray-700 rounded"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/add-product"
                  className="flex items-center p-2 hover:bg-gray-700 rounded"
                >
                  Add Product
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/profile"
                  className="flex items-center p-2 hover:bg-gray-700 rounded"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
