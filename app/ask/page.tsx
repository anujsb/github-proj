import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

const Ask = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
        <div className="w-[452px]">
          <div className="text-center">
            <h1 className="text-4xl">Ask</h1>
            <p className="text-dark-grey">
              Seek guidance on code, architecture, and more <br />
              by tagging @codegen-ai.
            </p>
          </div>
          <div className="p-4 py-10 mt-10 bg-white border border-dashed rounded-xl flex flex-col items-center justify-center text-center ">
            <Image
              src="/ask.svg"
              width={30}
              height={30}
              alt="GitHub logo"
              className=""
            />
            <h1>Read the docs</h1>
            <p className="text-sm text-light-grey-bg">
              How-to guides, feature lists, & more
            </p>
          </div>
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex items-center">
            <div className="p-2">
              <h1>Allow Q&A on Pull Requests</h1>
              <p className="text-sm text-light-grey-bg">
                Let developers tag @codegen-ai to ask questions directly on pull
                requests.
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

export default Ask;
