import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
const Review = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
        <div className="w-[452px]">
          <div className="text-center">
            <h1 className="text-4xl">Reviews</h1>
            <p className="text-[#656D76]">
              Get comprehensive, LLM-powered code reviews on every pull request
              and commit, ensuring high-quality and error-free code.
            </p>
          </div>
          <div className="p-4 mt-10 bg-white shadow-lg rounded-xl flex">
            <div className="p-2">
              <h1>Automatically Review PRs</h1>
              <p className="text-sm text-[#656D76]">
                Should Codegen review pull requests when they are published and
                with each new commit?
              </p>
            </div>
            {/* <Switch/> */}
            <div className="p-2">switch</div>
          </div>
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex">
            <div className="p-2">
              <h1>Automatically Summarize PRs</h1>
              <p className="text-sm text-[#656D76]">
                Should Codegen summarize pull requests when they are published
                and with each new commit?
              </p>
            </div>
            {/* <Switch/> */}
            <div className="p-2">switch</div>
          </div>
          <div className="p-4 mt-5 bg-white shadow-lg rounded-xl flex">
            <div className="p-2">
              <h1>Quiet mode</h1>
              <p className="text-sm text-[#656D76]">
                Should Codegen skip commenting 'Looks good to me!' when no
                issues are found?
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

export default Review;
