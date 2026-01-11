import { useState } from "react";
import UserSidebar from "./Sidebar";
import HeaderPrint from "../HeaderPrint";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* WEBSITE HEADER */}
      <HeaderPrint />

      {/* USER PANEL */}
      <div className="min-h-screen bg-gray-100 pt-18 md:pt-20 flex">
        {/* SIDEBAR */}
        <UserSidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        {/* CONTENT */}
        <div className="flex-1 p-4 md:p-6">
          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden mb-4 px-4 py-2 bg-rose-600 text-white rounded"
          >
            ☰ Menu
          </button>

          {children}
        </div>
      </div>
    </>
  );
};

export default UserLayout;
