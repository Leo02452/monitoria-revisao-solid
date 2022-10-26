import { JwtPayload } from 'jsonwebtoken';

export default interface IUser {
  username: string,
  role: string,
  email: string,
  password: string,
}

export interface IUserPayload extends Omit<IUser, 'password'>, JwtPayload {}
