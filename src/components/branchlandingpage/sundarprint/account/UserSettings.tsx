import { useState } from "react";
import { useAuth } from "../context/AuthContext.helpers";

const UserSettings = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-md bg-white p-6 rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Account Settings</h1>

      <label className="block mb-2">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <label className="block mb-2">Email</label>
      <input
        value={user?.email}
        disabled
        className="w-full border p-2 rounded mb-4 bg-gray-100"
      />

      <label className="block mb-2">New Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <button className="w-full bg-rose-600 text-white py-2 rounded">
        Update Profile
      </button>
    </div>
  );
};

export default UserSettings;
