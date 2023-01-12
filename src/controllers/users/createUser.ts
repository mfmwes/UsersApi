import { Request , Response } from "express";
import StatusCodes from "http-status-codes"


const createUser = (req: Request, res: Response) => {
    const newUser = req.body
    res.status(StatusCodes.CREATED).send(newUser)
};


export default createUser