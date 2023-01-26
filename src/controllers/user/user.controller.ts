import { Request, Response } from "express";
import userService from "../../services/user/user.service";

class UserController {
  createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req);
    return res.status(201).json(user);
  };

  loginUser = async (req: Request, res: Response) => {
    const { status, message } = await userService.loginUser(req);
    return res.status(status).json(message);
  };

  getAllUsers = async (req: Request, res: Response) => {
    const { status, message } = await userService.getAll();
    return res.status(status).json(message);
  };

  getOne = async (req: Request, res: Response) => {
    const { status, message } = await userService.getOne(req);
    return res.status(status).json(message);
  };

  update = async (req: Request, res: Response) => {
    const user = await userService.update(req);
    return res.status(200).json(user);
  };

  delete = async (req: Request, res: Response) => {
    await userService.delete(req);
    return res.status(200).json("ok");
  };
}

export default new UserController();
