/code

import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

const handleGithubRedirectedCode = async (code: string, userId: string) => {
  await axios
    .get(`http://localhost:3000/api/github/auth?code=${code}&userId=${userId}`)
    .catch((_) => {});

  return redirect("/code");
};

export default async function Home({searchParams,}: {searchParams: { code: string };}) 
{
  let user = await currentUser();

  if (searchParams && searchParams.code) {
    await handleGithubRedirectedCode(searchParams.code, user?.id!);
  }

  const fetchRepos = async () => {
    const response = await fetch(
      "http://localhost:3000/api/github/repos?userId=" + user?.id,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  };

  const repos: any[] = await fetchRepos();

  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center z-50">
          <div className="">Welcome, {user?.fullName}</div>
          <div className="mt-5 items-center flex justify-center flex-col">
            {!repos || repos.length === 0 ? (
              <Link
                className="border border-dashed p-5 py-3 rounded-lg mt-5"
                href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo%20read:user%20write:repo_hook%20read:repo_hook%20read:org`}
              >
                Authorize Github App
              </Link>
            ) : (
              <>
                <Table>
                  <TableCaption>
                    A list of your recent repositories
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">id</TableHead>
                      <TableHead className="w-[500px]">Repository</TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {repos.slice(0, 5).map((repo, id) => (
                      <TableRow key={repo.id}>
                        <TableCell className="font-medium">{id + 1}</TableCell>
                        <TableCell>{repo.name}</TableCell>
                        <TableCell className="text-right">
                          <Button>
                            <Link
                              href={`/repo/${repo.owner.login}/${repo.name}/pulls`}
                            >
                              Select
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

