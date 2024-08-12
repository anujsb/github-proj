import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

const Support = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <SideBar />
        <div className="flex flex-col items-center justify-center w-full p-4 md:p-10">
          <div className="">
            support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
