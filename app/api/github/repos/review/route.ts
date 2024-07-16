import { NextApiRequest } from "next";
import axios from "axios";
import clientPromise from "@/lib/mongodb";

export async function GET(
    req: NextApiRequest
): Promise<Response> {
    const { searchParams } = new URL(req.url!);
    const userId = searchParams.get("userId");
    const url = searchParams.get("url");
    console.log("userId -> ", userId);

    if (!userId || !url) {
        return Response.json({ error: "Invalid request" });
    }

    const client = await clientPromise;
    const github = client.db().collection("github");
    const token = await github.findOne({ clekrUserId: userId });

    const res = await axios.post("http://localhost:8000/process", {
        GithubToken: token?.accessToken,
        url,
        task: "review",
    })
    console.log("res -> ", res.data);

    return Response.json(res.data);
}

