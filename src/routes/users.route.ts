import { Router, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response) => {
  const users = [
    {
      userName: "John",
    },
  ];
  res.status(StatusCodes.OK).json(users);
});

usersRoute.get("/users/:uuid", (req: Request, res: Response) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
  });

usersRoute.post('/users', (req: Request, res: Response) => {
    const newUser = req.body
    res.status(StatusCodes.CREATED).send(newUser)
});

usersRoute.put('/users/:uuid', (req: Request, res: Response) => {
    const uuid = req.params.uuid
    const modifiedUser = req.body
    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send(modifiedUser)
});

usersRoute.delete('/users/:uuid', (req:Request, res:Response) => {
    const uuid = req.params.uuid
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
