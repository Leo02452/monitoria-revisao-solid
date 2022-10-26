import IUser from '../../entities/IUser';
import User from '../../sequelizeDatabase/models/user';
import IUserRepository from '../IUserRepository';

export default class SequelizeUserRepository implements IUserRepository {
  private _model: typeof User;
  constructor() {
    this._model = User;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this._model.findOne({ where: { email } });

    return user;
  }
}
