import BcryptPasswordProvider from './implementations/BcryptPasswordProvider';
import JwtTokenProvider from './implementations/JwtTokenProvider';
import ZodLoginValidator from './implementations/ZodLoginValidator';

const zodLoginValidator = new ZodLoginValidator();
const bcryptPasswordProvider = new BcryptPasswordProvider();
const jwtTokenProvider = new JwtTokenProvider();

export { zodLoginValidator, bcryptPasswordProvider, jwtTokenProvider };
