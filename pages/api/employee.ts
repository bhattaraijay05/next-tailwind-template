// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { employees } from "./alldata";

export default function handler(
	_: NextApiRequest,
	res: NextApiResponse<string>
) {
	res.status(200).send(JSON.stringify(employees));
}
