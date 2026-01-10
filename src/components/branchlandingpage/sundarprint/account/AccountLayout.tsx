import { NavLink, Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <h2 className="text-xl font-bold mb-6">My Account</h2>
        <nav className="space-y-3">
          <NavLink to="/account/dashboard" className="block">
            Dashboard
          </NavLink>
          <NavLink to="/account/settings" className="block">
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AccountLayout;
