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
      <div>
        <SideBar />
        <NavBar />
        <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/code">{params.username}</BreadcrumbLink>
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
    </>
  );
}
