import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

const Settings = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
        <div className="w-[452px]">
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex">
            <div className="p-2">
              <h1>Third party logging</h1>
              <p className="text-sm text-[#656D76]">
                Can we store the prompts we send to Azure's OpenAI service?
                Disabling this will mean the team is unable to provide support.
              </p>
            </div>
            {/* <Switch/> */}
            <div className="p-2">switch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
