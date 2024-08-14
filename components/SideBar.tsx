"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { motion } from "framer-motion";

const SideBar: React.FC = () => {
  // const pathname = usePathname();

  // const isActive = (path: string) => {
  //   return pathname === path ? "bg-[#EBEDFC] dark:bg-[#2A2D3F] " : "";
  // };

  const links1 = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <Image
          src="/dashboard.svg"
          width={15}
          height={15}
          alt="Dashboard logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Code",
      href: "/code",
      icon: (
        <Image
          src="/code.svg"
          width={15}
          height={15}
          alt="code logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },

    {
      label: "Review",
      href: "/review",
      icon: (
        <Image
          src="/review.svg"
          width={15}
          height={15}
          alt="review logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Ask",
      href: "/ask",
      icon: (
        <Image
          src="/ask.svg"
          width={15}
          height={15}
          alt="ask logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "Documentation",
      href: "/documentation",
      icon: (
        <Image
          src="/documentation.svg"
          width={15}
          height={15}
          alt="documentation logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    // {
    //   label: "Logout",
    //   href: "#",
    //   icon: <IconArrowLeft className=" h-5 w-5 flex-shrink-0" />,
    // },
  ];
  const links2 = [
    {
      label: "settings",
      href: "/settings",
      icon: (
        <Image
          src="/settings.svg"
          width={15}
          height={15}
          alt="settings logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "billing",
      href: "/billing",
      icon: (
        <Image
          src="/billing.svg"
          width={15}
          height={15}
          alt="billing logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    {
      label: "support",
      href: "support",
      icon: (
        <Image
          src="/support.svg"
          width={15}
          height={15}
          alt="support logo"
          className=" h-5 w-5 flex-shrink-0"
        />
      ),
    },
    // {
    //   label: "Logout",
    //   href: "#",
    //   icon: <IconArrowLeft className=" h-5 w-5 flex-shrink-0" />,
    // },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border-r border-mid-grey-bg h-full">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/* {open ? <Logo /> : <LogoIcon />} */}
            <div className="mt-16 p-2 flex flex-col justify-start gap-2 bg-ghost-white rounded-xl ">
              {links1.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            <div className="bg-primary-grad-light-bg text-white p-4 rounded-lg my-4">
              <h1 className="text-lg text-white dark:text-black">
                Upgrade to Continue Eacc.dev
              </h1>
              <p className="mt-2  dark:text-black text-light-lavender">
                <span className=" text-white dark:text-black font-semibold">
                  6 days
                </span>{" "}
                left in your free trial. To continue benefiting from Eacc.dev,
                upgrade to a paid plan for $25/month per developer.
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
            <div className="p-2 flex flex-col justify-start gap-2 bg-ghost-white rounded-xl ">
              {links2.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>{" "}
          {/* <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="/next.svg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div> */}
        </SidebarBody>
      </Sidebar>
    </div>
  );
};

export default SideBar;

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium  whitespace-pre"
      >
        Monk Mode
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6  rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
