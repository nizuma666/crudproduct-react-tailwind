import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-2xl md:hidden"></button>
        <Link to="/dashboard" className="text-2xl font-bold ml-4">
          Dashboard
        </Link>
      </div>
      <div>
        <span>Welcome</span>
      </div>
    </header>
  );
};

export default Navbar;
