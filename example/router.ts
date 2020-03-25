import { Router } from 'express';
import { login, register } from "../lib/controllers";

const router = Router();

router.post('/login', login);
router.post('/register', register);

export { router }
