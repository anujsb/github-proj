import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { currentUser } from "@clerk/nextjs/server";
import TableContent from "./table-content";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default async function RepoDetails({
  params,
}: {
  params: { name: string; username: string };
}) {
  let user = await currentUser();

  const fetchRepoPRs = async () => {
    const response = await fetch(
      `http://localhost:3000/api/github/repos/pulls/?userId=${user?.id}&username=${params.username}&name=${params.name}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  };

  const prs: PullRequest[] = await fetchRepoPRs();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <NavBar />
        <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden">
          <SideBar />
          <div className="p-1 md:p-10 lg:p-20 mr-2 md:m-6 lg:m-10 flex flex-col items-center w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/code">
                    {params.username}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{params.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <TableContent prs={prs} name={params.name} />
          </div>
        </div>
      </div>
    </>
  );
}
