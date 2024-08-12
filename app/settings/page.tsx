import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
        <div className="w-[452px]">
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex items-center">
            <div className="p-2">
              <h1>Third party logging</h1>
              <p className="text-sm text-light-grey-bg">
                Can we store the prompts we send to Azure&apos;s OpenAI service?
                Disabling this will mean the team is unable to provide support.
              </p>
            </div>
            <div className="ml-4">
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
