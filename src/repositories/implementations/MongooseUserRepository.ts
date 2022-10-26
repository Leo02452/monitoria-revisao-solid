import IUser from '../../entities/IUser';
import mongooseUserModel from '../../mongooseDatabase/models/mongoUserModel';
import IUserRepository from '../IUserRepository';

export default class MongooseUserRepository implements IUserRepository {
  private _model: typeof mongooseUserModel;
  constructor() {
    this._model = mongooseUserModel;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this._model.findOne({ email });
    return user;
  }
}
