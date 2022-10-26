import { IUserPayload } from '../entities/IUser';

export default interface ITokenGeneratorProvider {
  generate(payload: IUserPayload): string
}
