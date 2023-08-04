import { Request, Response } from 'express';

export const HomeController = async (_: Request, res: Response) => {
  return res.sendFile('index.html');
};
