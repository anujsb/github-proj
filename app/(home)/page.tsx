import React from "react";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-20 m-10 flex flex-col items-center justify-center ">
        {/* <div className=""> */}
        <div className="text-center m-10 px-24">
          <h1 className="text-4xl">
            Welcome to <span className="pri-grad-light">CodeGen</span>, Shwetas!
          </h1>
          <p className="text-dark-grey">
            To get an AI code review, start by opening a new pull request. If
            you already have an open pull request, just add a comment such as
            <span className="text-lavender">
              "@codegen-ai please review this."
            </span>{" "}
            Keep in mind: there is no autocomplete for @codegen-ai!
          </p>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <div className=" bg-white  p-4 rounded-lg">
            <Image
              src="/review.svg"
              width={55}
              height={55}
              alt="GitHub logo"
              className="bg-light-lavender p-4 rounded-full"
            />
            <div className="flex items-center mt-2">
              <h1 className="text-lg ">Automated Code Reviews</h1>
              <p className="bg-success-sec text-success-pri px-1.5 mx-2 rounded-md text-sm">
                Enabled
              </p>
            </div>
            <p className="text-dark-grey mt-1">
              Receive comprehensive, AI-driven code reviews on every pull
              request and commit, ensuring high-quality code with minimal
              effort.
            </p>
            <Button
              className="mt-2 bg-light-lavender text-pri text-lg"
              variant="secondary"
            >
              Documentation
            </Button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <Image
              src="/ask.svg"
              width={55}
              height={55}
              alt="GitHub logo"
              className="bg-light-lavender p-4 rounded-full"
            />
            {/* <h1 className="text-lg mt-2">Question & Answer</h1> */}
            <div className="flex items-center mt-2">
              <h1 className="text-lg ">Question & Answer</h1>
              <p className="bg-success-sec text-success-pri px-1.5 mx-2 rounded-md text-sm">
                Enabled
              </p>
            </div>
            <p className="text-dark-grey mt-1">
              Simply tag @codegen-ai in a pull request comment to ask questions
              and get instant assistance.
            </p>
            <Button
              className="mt-2 bg-light-lavender text-pri text-lg"
              variant="secondary"
            >
              Documentation <Image
              src="/arrow.svg"
              width={7}
              height={7}
              alt="arrow"
              className="mx-2"
            />
            </Button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default page;
