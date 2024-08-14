import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Switch } from "@/components/ui/switch";

const Review = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden h-screen">
        {" "}
        <SideBar />
        <div className="p-1 md:p-10 lg:p-20 mr-2 md:m-6 lg:m-10 flex flex-col items-center w-full">
          <div className="w-full max-w-md">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl">Reviews</h1>
              <p className="text-dark-grey mt-2">
                Get comprehensive, LLM-powered code reviews on every pull
                request and commit, ensuring high-quality and error-free code.
              </p>
            </div>
            <div className="p-4 mt-8 bg-white shadow-lg rounded-xl flex items-center">
              <div className="flex-1">
                <h1 className="text-lg">Automatically Review PRs</h1>
                <p className="text-sm text-light-grey-bg mt-1">
                  Should Eacc.dev review pull requests when they are published
                  and with each new commit?
                </p>
              </div>
              <div className="ml-4">
                <Switch className="bg-muted-foreground" />
              </div>
            </div>
            <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex items-center">
              <div className="flex-1">
                <h1 className="text-lg">Automatically Summarize PRs</h1>
                <p className="text-sm text-light-grey-bg mt-1">
                  Should Eacc.dev summarize pull requests when they are
                  published and with each new commit?
                </p>
              </div>
              <div className="ml-4">
                <Switch />
              </div>
            </div>
            <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex items-center">
              <div className="flex-1">
                <h1 className="text-lg">Quiet mode</h1>
                <p className="text-sm text-light-grey-bg mt-1">
                  Should Eacc.dev skip commenting &apos;Looks good to me!&apos;
                  when no issues are found?
                </p>
              </div>
              <div className="ml-4">
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
