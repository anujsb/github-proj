import React from "react";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  return (
    <div>
      <NavBar />
      <div className="rounded-md flex flex-col md:flex-row flex-1 w-full overflow-hidden">
        <SideBar />
        <div className="p-1 md:p-10 lg:p-20 mr-2 md:m-10 flex flex-col items-center w-full">
          <div className="text-center m-4 md:m-10">
            <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/github.svg"
                width={50}
                height={50}
                alt="GitHub logo"
                className="text-black"
              />
              <div className="flex flex-col ">
                <h1 className="text-lg">{user?.fullName}</h1>
                <span className="text-sm text-[#7A7A7A]">16 repositories</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-5">
              Welcome to <span className="pri-grad-light">Eacc.dev</span>,
              {user?.firstName}!
            </h1>
            <p className="text-dark-grey mt-4">
              To get an AI code review, start by opening a new pull request. If
              you already have an open pull request, just add a comment such as
              <span className="text-lavender">
                &quot;@Eacc.dev-ai please review this.&quot;
              </span>{" "}
              Keep in mind: there is no autocomplete for @Eacc.dev-ai!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/review-dash.svg"
                width={55}
                height={55}
                alt="GitHub logo"
                className="bg-light-lavender p-4 rounded-full"
              />
              <div className="flex items-center mt-2">
                <h1 className="text-lg">Automated Code Reviews</h1>
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
                <Image
                  src="/arrow.svg"
                  width={7}
                  height={7}
                  alt="arrow"
                  className="ml-2"
                />
              </Button>
            </div>
            <div className="bg-white p-4 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/ask-dash.svg"
                width={55}
                height={55}
                alt="GitHub logo"
                className="bg-light-lavender p-4 rounded-full"
              />
              <div className="flex items-center mt-2">
                <h1 className="text-lg">Question & Answer</h1>
                <p className="bg-success-sec text-success-pri px-1.5 mx-2 rounded-md text-sm">
                  Enabled
                </p>
              </div>
              <p className="text-dark-grey mt-1">
                Simply tag @Eacc.dev-ai in a pull request comment to ask
                questions and get instant assistance.
              </p>
              <br/>
              <Button
                className="mt-2 bg-light-lavender text-pri text-lg"
                variant="secondary"
              >
                Documentation
                <Image
                  src="/arrow.svg"
                  width={7}
                  height={7}
                  alt="arrow"
                  className="ml-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
