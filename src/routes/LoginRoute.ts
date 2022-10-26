import { Router } from 'express';
import loginController from '../factories';

const route = Router();

route.post('/login', (req, res) => loginController.handle(req, res));

export default route;
