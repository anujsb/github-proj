import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Switch } from "@/components/ui/switch";
const Review = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
        <div className="w-[452px]">
          <div className="text-center">
            <h1 className="text-4xl">Reviews</h1>
            <p className="text-dark-grey">
              Get comprehensive, LLM-powered code reviews on every pull request
              and commit, ensuring high-quality and error-free code.
            </p>
          </div>
          <div className="p-4 mt-10 bg-white shadow-lg rounded-xl flex items-center ">
            <div className="p-2">
              <h1>Automatically Review PRs</h1>
              <p className="text-sm text-light-grey-bg">
                Should Codegen review pull requests when they are published and
                with each new commit?
              </p>
            </div>
            <div className="ml-4">
              <Switch className="bg-muted-foreground" />
            </div>
          </div>
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex items-center ">
            <div className="p-2">
              <h1>Automatically Summarize PRs</h1>
              <p className="text-sm text-light-grey-bg">
                Should Codegen summarize pull requests when they are published
                and with each new commit?
              </p>
            </div>
            <div className="ml-4">
              <Switch />
            </div>
          </div>
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex items-center ">
            <div className="p-2">
              <h1>Quiet mode</h1>
              <p className="text-sm text-light-grey-bg">
                Should Codegen skip commenting 'Looks good to me!' when no
                issues are found?
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

export default Review;
