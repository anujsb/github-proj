import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Billing = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64  mt-10 flex flex-col items-center justify-center">
        <div className="text-center ">
          <h1 className="text-4xl">Pricing made easy</h1>
          <p className="text-dark-grey w-[550px]">
            Buy fixed seats for unlimited developer access. Unassigned
            developers are excluded. No automatic seat additions or bill
            increases.
          </p>
        </div>
        <div className="pt-10 grid grid-flow-col grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
            <Image
              src="/bill-free.svg"
              width={55}
              height={55}
              alt="GitHub logo"
              className="bg-light-lavender p-4 rounded-2xl"
            />
            <div className="flex items-center mt-2">
              <h1 className="text-2xl">Free Plan</h1>
              <p className="bg-light-lavender py-1 px-2 ml-2 rounded-lg text-sm text-pri">
                For Developers
              </p>
            </div>
            <p className="mt-2  text-dark-grey">
              For large open source projects
            </p>
            {/* <hr className="" /> */}
            <div className="border-dashed border-b mt-4"> </div>
            <p className="flex items-center mt-4 text-light-grey-bg">
              <span className="text-3xl  text-black px-1">$0 </span> /month
            </p>
            <Button className="mt-4 bg-light-grey-2 text-black border hover:bg-5black shadow-sm">
              Get Started{" "}
              <Image
                src="/dash-arrow.svg"
                width={15}
                height={15}
                alt="GitHub logo"
                className="ml-2 "
              />
            </Button>
            <div className="mt-4">
              <h1 className="text-pri my-2">Features Included:</h1>
              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>AI code reviews on every commit</p>
              </div>
              <hr />

              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Bug fixes & code generations</p>
              </div>
              <hr />
              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Question & answer functionality</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
            <Image
              src="/bill-pro.svg"
              width={55}
              height={55}
              alt="GitHub logo"
              className="bg-light-lavender p-4 rounded-2xl"
            />
            <div className="flex items-center mt-2">
              <h1 className="text-2xl">pro</h1>
              <p className="bg-light-lavender py-1 px-2 ml-2 rounded-lg text-sm text-pri">
                For Businesses
              </p>
            </div>
            <p className="mt-2  text-dark-grey">
              Unlimited use of all features
            </p>
            {/* <hr className="" /> */}
            <div className="border-dashed border-b mt-4"> </div>
            <p className="flex items-center mt-4 text-light-grey-bg">
              <span className="text-3xl  text-black px-1">$20 </span> /month per
              developer
            </p>
            <Button className="mt-4 black-grad-radial shadow-inner border text-white dark:text-black">
              Get Started{" "}
              <Image
                src="/dash-arrow-white.svg"
                width={15}
                height={15}
                alt="GitHub logo"
                className="ml-2 text-white "
              />
            </Button>
            <div className="mt-4">
              <h1 className="text-pri my-2">Features Included:</h1>
              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>AI code reviews on every commit</p>
              </div>
              <hr />

              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Bug fixes & code generations</p>
              </div>
              <hr />
              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Question & answer functionality</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
            <Image
              src="/bill-pro.svg"
              width={55}
              height={55}
              alt="GitHub logo"
              className="bg-light-lavender p-4 rounded-2xl"
            />
            <div className="flex items-center mt-2">
              <h1 className="text-2xl">Enterprise</h1>
              <p className="bg-light-lavender py-1 px-2 ml-2 rounded-lg text-sm text-pri">
                For Organizations
              </p>
            </div>
            <p className="mt-2  text-dark-grey">
              More customization and support
            </p>
            {/* <hr className="" /> */}
            <div className="border-dashed border-b mt-4"> </div>
            <p className="flex items-center mt-4 text-light-grey-bg">
              <span className="text-3xl  text-black px-1">Contact us</span>
            </p>
            <Button className="mt-4 bg-light-grey-2 text-black border hover:bg-5black shadow-sm ">
              Get Started{" "}
              <Image
                src="/dash-arrow.svg"
                width={15}
                height={15}
                alt="GitHub logo"
                className="ml-2 "
              />
            </Button>
            <div className="mt-4">
              <h1 className="text-pri my-2">Features Included:</h1>
              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Weekly code change</p>
              </div>
              <hr />

              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Security documentation</p>
              </div>
              <hr />
              <div className="flex my-2 text-dark-grey">
                <Image
                  src="/tick.svg"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                  className="bg-light-lavender rounded-md p-1.5 mr-1"
                />
                <p>Priority support, with SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
