"use client";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <div className="flex flex-col w-full h-screen p-5 pt-8">
            <div className="flex w-full items-center justify-center h-full">
              {children}
            </div>
          </div>
  );
}
