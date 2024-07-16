import { getOpenPRs } from "@/lib/github";
import clientPromise from "@/lib/mongodb";
import { type NextRequest } from "next/server";

export async function GET(
  req: NextRequest
): Promise<Response> {
  // read path params
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const username = searchParams.get("username");
  const userId = searchParams.get("userId");
  if (!name || !username || !userId) {
    return Response.json({ error: "Invalid request" });
  }
  const client = await clientPromise;
  const github = client.db().collection("github");
  const token: any = await github.findOne({ clekrUserId: userId });
  console.log("token -> ", token?.accessToken);

  if (!token) {
    return Response.json({ error: "Unauthorized" });
  }

  const prs = await getOpenPRs(name!, token.accessToken, username);
  return Response.json(prs);
}
