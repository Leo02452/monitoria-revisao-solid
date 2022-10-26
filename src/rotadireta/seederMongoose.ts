import { Request, Response, Router } from 'express';
import mongooseUserModel from '../mongooseDatabase/models/mongoUserModel';

const route = Router();

route.get('/seeder', async (_req: Request, res: Response) => {
  const user = await mongooseUserModel.create({
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
    // senha: secret_admin
  });
  return res.status(200).json(user);
});

export default route;
