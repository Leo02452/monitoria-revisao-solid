import { Request, Response } from 'express';
import ILoginValidator from '../providers/ILoginValidator';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(
    private _loginService: LoginService,
    private _validator: ILoginValidator,
  ) { }

  async handle(req: Request, res: Response) {
    const data = await this._validator.validateBody(req.body);

    const token = await this._loginService.execute(data);

    res.status(200).json({ token });
  }
}
