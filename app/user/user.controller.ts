import expressAsyncHandler from 'express-async-handler';
import { type Request, type Response } from 'express';
import * as userService from './user.service';
import { createResponse } from '../common/helper/response.helper';

export const createUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const result = await userService.createUser(req.body);
    res.send(createResponse(result, 'User created sucssefully'));
  },
);
