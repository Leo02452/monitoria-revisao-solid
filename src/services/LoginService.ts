import { ErrorTypes } from '../errors/catalog';
import { ILoginDTO } from '../providers/implementations/ZodLoginValidator';
import IPasswordCompareProvider from '../providers/IPasswordCompareProvider';
import ITokenGeneratorProvider from '../providers/ITokenGeneratorProvider';
import IUserRepository from '../repositories/IUserRepository';

export default class LoginService {
  constructor(
    private _userRepository: IUserRepository,
    private _passwordCompareProvider: IPasswordCompareProvider,
    private _tokenGeneratorProvider: ITokenGeneratorProvider,
  ) { }

  async execute(data: ILoginDTO) {
    // usa o model
    const user = await this._userRepository.findByEmail(data.email);

    if (!user) throw new Error(ErrorTypes.EntityNotFound);

    // preciso saber se a senha tá correta
    const isCorrectPassword = await this
      ._passwordCompareProvider.validate(data.password, user.password);

    if (!isCorrectPassword) throw new Error(ErrorTypes.UnauthorizedError);

    const { password, ...userWithoutPassword } = user;

    // gero um token
    const token = this._tokenGeneratorProvider.generate(userWithoutPassword);

    // retorno esse token
    return token;
  }
}
