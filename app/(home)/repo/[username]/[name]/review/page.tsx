import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function ReviewPR({
  searchParams,
}: {
  searchParams: { url: string };
}) {
  let user = await currentUser();

  const fetchRepos = async () => {
    const response = await fetch(
      `http://localhost:3000/api/github/repos/review/?userId=${user?.id}&url=${searchParams.url}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  };

  const repos: any = await fetchRepos();

  const keys = Object.keys(repos.review);
  return (
    <div>
      {keys.map((key) => (
        <div key={key} className="mt-3">
          <h1 className=" capitalize">{key.replaceAll("_", " ")}: </h1>
          <div>{repos.review[key]}</div>
        </div>
      ))}
    </div>
  );
}
