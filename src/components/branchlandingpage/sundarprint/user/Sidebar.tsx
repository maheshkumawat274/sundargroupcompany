import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/user" },
  { name: "Liked Products", path: "/user/liked" },
  { name: "Cart", path: "/user/cart" },
  { name: "Orders", path: "/user/orders" },
  { name: "Payments", path: "/user/payments" },
];

const UserSidebar = ({ open, setOpen }: any) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-10 bg-white w-64  min-h-screen shadow-lg transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-5 font-bold text-green-600 text-xl">
          My Account
        </div>

        <nav className="space-y-2 px-4">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default UserSidebar;
