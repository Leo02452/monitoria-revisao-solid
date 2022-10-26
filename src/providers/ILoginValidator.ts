import { ILoginDTO } from './implementations/ZodLoginValidator';

export default interface ILoginValidator {
  validateBody(obj: unknown): Promise<ILoginDTO>
}
