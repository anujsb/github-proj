import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
const Documentation = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden h-screen">
        {" "}
        <SideBar />
        <div className=" p-20 m-10 flex flex-col items-center w-full">docs</div>
      </div>
    </div>
  );
};

export default Documentation;
