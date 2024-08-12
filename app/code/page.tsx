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

interface Repo {
  id: number;
  name: string;
  owner: {
    login: string;
  };
}

const handleGithubRedirectedCode = async (code: string, userId: string) => {
  try {
    await axios.get(`http://localhost:3000/api/github/auth?code=${code}&userId=${userId}`);
  } catch (error) {
    console.error("Error during GitHub authentication:", error);
    // Optionally, redirect to an error page or show a message
  }
  return redirect("/code");
};

const fetchRepos = async (userId: string | undefined): Promise<Repo[]> => {
  if (!userId) return []; // Return an empty array if no userId is provided

  try {
    const response = await fetch(`http://localhost:3000/api/github/repos?userId=${userId}`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return []; // Return an empty array on error
  }
};

export default async function Home({ searchParams }: { searchParams: { code: string } }) {
  const user = await currentUser();

  if (searchParams.code && user) {
    await handleGithubRedirectedCode(searchParams.code, user.id);
  }

  const repos: Repo[] = await fetchRepos(user?.id);

  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="ml-64 p-4 mt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center z-50">
          <div>Welcome, {user?.fullName}</div>
          <div className="mt-5 flex flex-col items-center">
            {!repos.length ? (
              <Link
                className="border border-dashed p-5 py-3 rounded-lg mt-5"
                href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo%20read:user%20write:repo_hook%20read:repo_hook%20read:org`}
              >
                Authorize Github App
              </Link>
            ) : (
              <Table>
                <TableCaption>A list of your recent repositories</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="w-[500px]">Repository</TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {repos.slice(0, 5).map((repo, index) => (
                    <TableRow key={repo.id}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{repo.name}</TableCell>
                      <TableCell className="text-right">
                        <Button>
                          <Link href={`/repo/${repo.owner.login}/${repo.name}/pulls`}>
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
