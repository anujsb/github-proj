import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden h-screen">
        {" "}
        <SideBar />
        <div className="p-6 md:p-10 lg:p-20 m-4 md:m-6 lg:m-10 flex flex-col items-center w-full">
          <div className="w-full max-w-lg">
            <div className="p-4 bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center">
              <div className="flex-1 p-2">
                <h1 className="text-lg md:text-xl font-semibold">
                  Third party logging
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">
                  Can we store the prompts we send to Azure&apos;s OpenAI
                  service? Disabling this will mean the team is unable to
                  provide support.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
