import IUser from '../entities/IUser';

export default interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>
}
