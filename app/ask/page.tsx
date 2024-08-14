import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

const Ask = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden h-screen">
        {" "}
        <SideBar />
        <div className="p-1 md:p-10 lg:p-20 mr-2 md:m-6 lg:m-10 flex flex-col items-center w-full">
          <div className="w-full max-w-2xl">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-semibold">Ask</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Seek guidance on code, architecture, and more <br />
                by tagging @Eacc.dev-ai.
              </p>
            </div>
            <div className="p-6 md:p-8 lg:py-10 mt-8 md:mt-10 bg-white border border-dashed rounded-xl flex flex-col items-center justify-center text-center">
              <Image
                src="/docs_ask.svg"
                width={60}
                height={60}
                alt="GitHub logo"
                className="bg-light-lavender p-4 rounded-full"
              />
              <h1 className="mt-4 text-lg md:text-xl font-medium">
                Read the docs
              </h1>
              <p className="text-sm md:text-base text-gray-500 mt-2">
                How-to guides, feature lists, & more
              </p>
            </div>
            <div className="p-4 md:p-6 mt-6 md:mt-8 bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <h1 className="text-lg md:text-xl font-medium">
                  Allow Q&A on Pull Requests
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Let developers tag @Eacc.dev-ai to ask questions directly on
                  pull requests.
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

export default Ask;
