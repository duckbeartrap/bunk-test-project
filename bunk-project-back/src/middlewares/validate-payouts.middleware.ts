import { Request, Response, NextFunction } from 'express';
import { PayoutsRequest } from '../interfaces';

export function validatePayoutsRequest(req: Request, res: Response, next: NextFunction) {
  const { expenses } = req.body as PayoutsRequest;
  
  if (!expenses) {
    return res.status(400).json({ message: 'Request must contain expenses' });
  }
  
  if (!Array.isArray(expenses)) {
    return res.status(400).json({ message: 'Expenses must be an array' });
  }
  
  next();
}
