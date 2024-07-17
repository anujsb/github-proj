import React from "react";
import Link from "next/link";
import Image from "next/image";

const SideBar: React.FC = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="flex items-center space-x-3 rtl:space-x-reverse p-7">
        <h1 className="text-4xl ">CodeGen</h1>
      </div>
      <div className="h-full grid grid-flow-row px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="flex flex-col justify-start h-min p-1 space-y-2 font-medium bg-[#F8F9FA] rounded-md">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="code"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Code</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/review"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Review</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/ask"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Ask</span>
            </Link>
          </li>
          <li>
            <Link
              href="/documentation"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Documentation
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-end h-min p-1 space-y-2 font-medium bg-[#F8F9FA] rounded-md mt-5 ">
          <li>
            <Link
              href="/settings"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/billing"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Billing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEDFC] dark:hover:bg-gray-700 group"
            >
              <Image
                src="/dashboard.svg"
                width={15}
                height={15}
                alt="GitHub logo"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Support</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
