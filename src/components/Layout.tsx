import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <div className="px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
