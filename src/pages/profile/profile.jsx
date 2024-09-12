import { useState, useEffect } from "react";
import api from "../../config/api";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/auth/profile");
        setProfile(response.data);
      } catch (error) {
        swal.fire("Upss..", "there something wrong!", "error");
        console.error("Error fetching products:", error);
      }
    };
    fetchProfile();
  }, []);
  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <div className="mb-4">
          <p className="font-bold">Name:</p>
          <p className="text-gray-600 capitalize">{profile.username}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Email:</p>
          <p className="text-gray-600">{profile.email}</p>
        </div>
        {/* Add more user info fields as needed */}
      </div>
    </main>
  );
};

export default Profile;
