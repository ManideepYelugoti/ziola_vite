import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24"> {/* this fixes the overlap */}
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
