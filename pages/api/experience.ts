import type { NextApiRequest, NextApiResponse } from "next"
import { DataExperience } from "@data/experience"
import { IExperience } from "@interfaces/index"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IExperience[]>
) {
    res.status(200).json(DataExperience)
}
