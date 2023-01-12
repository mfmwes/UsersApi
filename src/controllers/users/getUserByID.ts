import { Request , Response } from "express";
import StatusCodes from "http-status-codes"

const getUserByID = (req: Request, res: Response) => {
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({uuid})
}


export default getUserByID