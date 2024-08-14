"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-mid-grey-bg shadow-b-sm border-b fixed bg-white w-full z-10">
      {" "}
      {/* Adjusted margin */}
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse ">
          <h1 className="text-2xl ">Eacc.dev</h1>
        </div>
        
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {/* <ul className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
          <ul className="font-medium flex md:space-x-4 rtl:space-x-reverse">
            <li>
              <Button variant="ghost">
                <Link href="#">Docs</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <Link href="#">Blogs</Link>
              </Button>
            </li>
            <li>
              {/* <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              > */}
              <Button className="hover:bg-[#3c56ff] bg-pri text-[#ffff]">
                <Link href="/billing" className="flex">
                  <Image
                    src="/schedule.svg"
                    width={15}
                    height={15}
                    alt="GitHub logo"
                    className="mr-2 "
                  />
                  Schedule a demo
                </Link>
              </Button>
              {/* </Link> */}
            </li>
            {/* <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="dark:text-grey-light"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </li> */}
            <li className="flex items-center justify-center">
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
