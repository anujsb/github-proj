"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-[#EBEDFC] dark:bg-[#2A2D3F] " : "";
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-mid-grey-bg sm:translate-x-0 "
      aria-label="Sidebar"
    >
      <div className="flex items-center space-x-3 rtl:space-x-reverse p-7">
        <h1 className="text-4xl ">Eacc.dev</h1>
      </div>
      <div className="h-full flex flex-col px-3 pb-4 overflow-y-auto bg-white ">
        <ul className="flex flex-col justify-start h-min p-1 space-y-2 font-medium bg-ghost-white rounded-md">
          <li>
            <Link
              href="/"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/"
              )}`}
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="Dashboard logo"
              />
              <span className="ms-3 text-black">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/code"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/code"
              )}`}
            >
              <Image src="/code.svg" width={15} height={15} alt="GitHub logo" />
              <span className="flex-1 ms-3 text-black">Code</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/review"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender group ${isActive(
                "/review"
              )}`}
            >
              <Image
                src="/review.svg"
                width={15}
                height={15}
                alt="review logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-black">Review</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/ask"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/ask"
              )}`}
            >
              <Image src="/ask.svg" width={15} height={15} alt="ask logo" />
              <span className="flex-1 ms-3 whitespace-nowrap text-black">Ask</span>
            </Link>
          </li>
          <li>
            <Link
              href="/documentation"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/documentation"
              )}`}
            >
              <Image
                src="/documentation.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-black">
                Documentation
              </span>
            </Link>
          </li>
        </ul>
        {/* <div> */}
        <div className="bg-primary-grad-light-bg text-white p-4 rounded-lg mt-16">
          <h1 className="text-lg text-white dark:text-black">Upgrade to Continue Eacc.dev</h1>
          <p className="mt-2  dark:text-black text-light-lavender">
            <span className=" text-white dark:text-black font-semibold">6 days</span> left in
            your free trial. To continue benefiting from Eacc.dev, upgrade to a
            paid plan for $25/month per developer.
          </p>
          <h1 className="flex text-lg mt-4  text-white dark:text-black">
            Upgrade Now{" "}
            <Image
              src="/arrow-white.svg"
              width={8}
              height={8}
              alt="arrow"
              className="mx-2  text-white dark:text-black"
            />
          </h1>
        </div>
        <ul className="flex flex-col h-min p-1 space-y-2 font-medium bg-ghost-white rounded-md mt-5 ">
          <li>
            <Link
              href="/settings"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/settings"
              )}`}
            >
              <Image
                src="/settings.svg"
                width={15}
                height={15}
                alt="settings logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-black">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/billing"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/billing"
              )}`}
            >
              <Image
                src="/billing.svg"
                width={15}
                height={15}
                alt="billing logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-black">Billing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-light-lavender  group ${isActive(
                "/support"
              )}`}
            >
              <Image
                src="/support.svg"
                width={15}
                height={15}
                alt="support logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap text-black">Support</span>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </aside>
  );
};

export default SideBar;
