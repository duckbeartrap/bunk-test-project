import { NextFunction, Request, Response, Router } from 'express';
import { settleExpenses } from '../services';
import { PayoutsResponse } from '../interfaces';
import { validatePayoutsRequest } from '../middlewares';
import { PayoutsRequest } from '../interfaces';

const router: Router = Router();

router.post('/', validatePayoutsRequest, (req: Request, res: Response, next: NextFunction) => {
    const { expenses } = req.body as PayoutsRequest;
    const result: PayoutsResponse = settleExpenses(expenses);
    res.json(result);
});

export const PayoutsRouter: Router = router;