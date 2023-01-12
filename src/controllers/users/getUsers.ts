import { Request , Response } from "express";
import StatusCodes from "http-status-codes"

const getUsers = (req:Request, res:Response) =>{
    const users = [
        {
          userName: "John",
        },
      ];
      res.status(StatusCodes.OK).json(users);
}

export default getUsers