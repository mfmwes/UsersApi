import { Request , Response } from "express";
import StatusCodes from "http-status-codes"


const updateUser = (req: Request, res: Response) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body
    modifiedUser.uuid = uuid
    res.status(StatusCodes.OK).send(modifiedUser)
};


export default updateUser