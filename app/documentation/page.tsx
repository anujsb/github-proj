import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
const Documentation = () => {
  return (
    <div>
      <NavBar />
      <div className="rounded-md flex flex-col md:flex-row flex-1 w-full overflow-hidden">
        <SideBar />
        <div className=" p-20 m-10 flex flex-col items-center w-full">
          docs
        </div>
      </div>
    </div>
  );
};

export default Documentation;
