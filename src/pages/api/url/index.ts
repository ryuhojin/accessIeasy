// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "@/libs/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { urlParam }: any = req.query;
  const { data } = await axios.get(urlParam);
  res.status(200).json({ document: data });
}
