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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{params.username}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{params.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TableContent prs={prs} name={params.name} />
    </>
  );
}
