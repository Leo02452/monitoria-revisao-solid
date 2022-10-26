import * as jwt from 'jsonwebtoken';
import { IUserPayload } from '../../entities/IUser';
import ITokenGeneratorProvider from '../ITokenGeneratorProvider';
import 'dotenv/config';

export default class JwtTokenProvider implements ITokenGeneratorProvider {
  private _jwt;
  private _secret: string;
  private _signOptions: jwt.SignOptions;

  constructor() {
    this._jwt = jwt;
    this._secret = process.env.JWT_SECRET || 'jwt_secret';
    this._signOptions = { expiresIn: '7d', algorithm: 'HS256' };
  }

  generate(user: IUserPayload): string {
    const token = this._jwt.sign(user, this._secret, this._signOptions);

    return token;
  }
}
