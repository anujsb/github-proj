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
import Image from "next/image";

const handleGithubRedirectedCode = async (code: string, userId: string) => {
  await axios
    .get(`http://localhost:3000/api/github/auth?code=${code}&userId=${userId}`)
    .catch((_) => {});

  return redirect("/code");
};

export default async function Home({
  searchParams,
}: {
  searchParams: { code: string };
}) {
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
    <div className="">
      <NavBar />
      <div className="rounded-md flex flex-col md:flex-row flex-1 w-full overflow-hidden">
        <SideBar />
        <div className="p-1 md:p-10 lg:p-10 mr-2 md:m-10 flex flex-col items-center w-full">
          <div>
            <h1 className="text-3xl">Code</h1>
            <p>
              Ellipsis can generate code on issues and pull requests. To allow
              Ellipsis to test it's own code, configure a repository.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button className="px-6 py-10 mt-5 flex flex-col items-center justify-center bg-dark-grey">
              <Image
                src="/code.svg"
                width={15}
                height={15}
                alt="code logo"
                className=" h-5 w-5 flex-shrink-0"
              />
              <h1 className="text-xl">Configure repository</h1>
              <p>Allow Ellipsis to test it's own code</p>
            </Button>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl font-semibold mt-5">
              Welcome, {user?.fullName}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            {!repos || repos.length === 0 ? (
              <Link
                className="border border-dashed p-3 py-2 md:p-5 md:py-3 rounded-lg mt-5 text-center w-full max-w-xs"
                href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo%20read:user%20write:repo_hook%20read:repo_hook%20read:org`}
              >
                Authorize Github App
              </Link>
            ) : (
              <Table className="w-full ">
                <TableCaption>A list of your recent repositories</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px] md:w-[100px]">ID</TableHead>
                    <TableHead className="w-[300px] md:w-[500px]">
                      Repository
                    </TableHead>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
