import { Router, Response, Request } from 'express';
import { login, register } from "../lib/controllers";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', (_req: Request, res: Response) => res.send('ok'));

export { router }
