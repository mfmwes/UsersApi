import { Request , Response } from "express";
import StatusCodes from "http-status-codes"


const deleteUser = (req: Request, res: Response) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK)
};


export default deleteUser