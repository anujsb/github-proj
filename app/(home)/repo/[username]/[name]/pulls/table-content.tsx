"use client";
import React from "react";
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
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TableContent({
  prs,
  name,
}: {
  prs: PullRequest[];
  name: string;
}) {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>A list of your recent PRs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">id</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead className="w-[300px]">Commit</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prs.slice(0, 5).map((repo, id) => (
          <TableRow key={repo.id}>
            <TableCell className="font-medium">{id + 1}</TableCell>
            <TableCell>{repo.head.ref}</TableCell>
            <TableCell>{repo.title}</TableCell>
            <TableCell className="text-right">
              <Button
                onClick={() =>
                  router.push(
                    `/repo/${repo.user.login}/${name}/review?url=${repo.url}`
                  )
                }
              >
                Review
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
