import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Billing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden">
        <SideBar />
        <div className="p-1 md:p-10 lg:p-20 mr-2 md:m-6 lg:m-10 flex flex-col items-center w-full">
          <div className="text-center max-w-lg">
            <h1 className="text-2xl md:text-4xl font-semibold">Pricing made easy</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Buy fixed seats for unlimited developer access. Unassigned
              developers are excluded. No automatic seat additions or bill
              increases.
            </p>
          </div>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
            {/* Free Plan */}
            <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
              <Image
                src="/bill-free.svg"
                width={55}
                height={55}
                alt="GitHub logo"
                className="bg-light-lavender p-4 rounded-2xl mx-auto"
              />
              <div className="flex flex-col items-center mt-4">
                <h1 className="text-xl md:text-2xl font-semibold">Free Plan</h1>
                <p className="bg-light-lavender py-1 px-2 mt-2 rounded-lg text-sm text-pri">
                  For Developers
                </p>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
                For large open source projects
              </p>
              <div className="border-dashed border-b mt-4"></div>
              <p className="flex items-center justify-center mt-4 text-gray-800 dark:text-gray-300">
                <span className="text-3xl font-semibold">$0</span> /month
              </p>
              <Button className="mt-4 bg-light-grey-2 text-black border hover:bg-5black shadow-sm mx-auto">
                Get Started
                <Image
                  src="/dash-arrow.svg"
                  width={15}
                  height={15}
                  alt="Arrow icon"
                  className="ml-2"
                />
              </Button>
              <div className="mt-4">
                <h1 className="text-pri my-2 font-semibold">Features Included:</h1>
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>AI code reviews on every commit</p>
                </div>
                <hr />
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Bug fixes & code generations</p>
                </div>
                <hr />
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Question & answer functionality</p>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
              <Image
                src="/bill-pro.svg"
                width={55}
                height={55}
                alt="GitHub logo"
                className="bg-light-lavender p-4 rounded-2xl mx-auto"
              />
              <div className="flex flex-col items-center mt-4">
                <h1 className="text-xl md:text-2xl font-semibold">Pro</h1>
                <p className="bg-light-lavender py-1 px-2 mt-2 rounded-lg text-sm text-pri">
                  For Businesses
                </p>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
                Unlimited use of all features
              </p>
              <div className="border-dashed border-b mt-4"></div>
              <p className="flex items-center justify-center mt-4 text-gray-800 dark:text-gray-300">
                <span className="text-3xl font-semibold">$20</span> /month per developer
              </p>
              <Button className="mt-4 black-grad-radial shadow-inner border text-white dark:text-black mx-auto">
                Get Started
                <Image
                  src="/dash-arrow-white.svg"
                  width={15}
                  height={15}
                  alt="Arrow icon"
                  className="ml-2"
                />
              </Button>
              <div className="mt-4">
                <h1 className="text-pri my-2 font-semibold">Features Included:</h1>
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>AI code reviews on every commit</p>
                </div>
                <hr />
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Bug fixes & code generations</p>
                </div>
                <hr />
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Question & answer functionality</p>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="p-4 bg-white rounded-2xl border flex flex-col shadow-sm">
              <Image
                src="/bill-pro.svg"
                width={55}
                height={55}
                alt="GitHub logo"
                className="bg-light-lavender p-4 rounded-2xl mx-auto"
              />
              <div className="flex flex-col items-center mt-4">
                <h1 className="text-xl md:text-2xl font-semibold">Enterprise</h1>
                <p className="bg-light-lavender py-1 px-2 mt-2 rounded-lg text-sm text-pri">
                  For Organizations
                </p>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
                More customization and support
              </p>
              <div className="border-dashed border-b mt-4"></div>
              <p className="flex items-center justify-center mt-4 text-gray-800 dark:text-gray-300">
                <span className="text-3xl font-semibold">Contact us</span>
              </p>
              <Button className="mt-4 bg-light-grey-2 text-black border hover:bg-5black shadow-sm mx-auto">
                Get Started
                <Image
                  src="/dash-arrow.svg"
                  width={15}
                  height={15}
                  alt="Arrow icon"
                  className="ml-2"
                />
              </Button>
              <div className="mt-4">
                <h1 className="text-pri my-2 font-semibold">Features Included:</h1>
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Weekly code change</p>
                </div>
                <hr />
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Security documentation</p>
                </div>
                <hr />
                <div className="flex items-center my-2 text-gray-600 dark:text-gray-300">
                  <Image
                    src="/tick.svg"
                    width={25}
                    height={25}
                    alt="Tick icon"
                    className="bg-light-lavender rounded-md p-1.5 mr-1"
                  />
                  <p>Priority support, with SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
