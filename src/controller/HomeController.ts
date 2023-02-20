import { Request, Response } from 'express'

export const HomeController = async (_: Request, res: Response) => {
  res.sendFile('index.html')
}
