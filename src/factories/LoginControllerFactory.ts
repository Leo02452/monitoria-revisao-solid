import SequelizeUserRepository from '../repositories/implementations/SequelizeUserRepository';
import LoginController from '../controllers/LoginController';
import { zodLoginValidator, bcryptPasswordProvider, jwtTokenProvider } from '../providers';
// import MongooseUserRepository from '../repositories/implementations/MongooseUserRepository';
import LoginService from '../services/LoginService';

export default class LoginControllerFactory {
  static make() {
    // const userRepository = new MongooseUserRepository();
    const sequelizeUserRepository = new SequelizeUserRepository();
    const loginService = new LoginService(
      sequelizeUserRepository,
      bcryptPasswordProvider,
      jwtTokenProvider,
    );
    const loginController = new LoginController(loginService, zodLoginValidator);

    return loginController;
  }
}
