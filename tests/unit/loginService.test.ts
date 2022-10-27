import * as sinon from 'sinon';
import SequelizeUserRepository from '../../src/repositories/implementations/SequelizeUserRepository';
import { bcryptPasswordProvider, jwtTokenProvider } from '../../src/providers';
import LoginService from '../../src/services/LoginService';
import { loginBody, userMock } from '../mocks/userMock';
import { expect, use } from 'chai';
import { ErrorTypes } from '../../src/errors/catalog';
const chaiAsPromised = require('chai-as-promised');

use(chaiAsPromised);

describe('Login service', () => {
  afterEach(sinon.restore);

  const sequelizeUserRepository = new SequelizeUserRepository();
    const loginService = new LoginService(
      sequelizeUserRepository,
      bcryptPasswordProvider,
      jwtTokenProvider,
    );

  describe('On Success', () => {
    it('should return a token', async () => {
      sinon.stub(sequelizeUserRepository, 'findByEmail').resolves(userMock);
      sinon.stub(bcryptPasswordProvider, 'validate').resolves(true);
      sinon.stub(jwtTokenProvider, 'generate').returns('any-valid-token');

      return expect(loginService.execute(loginBody.valid)).to.eventually.be.equal('any-valid-token');
    });
  });

  describe('On Failure', () => {
    it('should rejects if findByEmail rejects', () => {
      sinon.stub(sequelizeUserRepository, 'findByEmail').rejects();

      return expect(loginService.execute(loginBody.valid)).to.eventually.be.rejected;
    });

    it('should throw an error if findByEmail returns null', () => {
      sinon.stub(sequelizeUserRepository, 'findByEmail').resolves(null);

      return expect(loginService.execute(loginBody.valid)).to.eventually.be.rejectedWith(ErrorTypes.EntityNotFound);
    });

    it('should rejects if validate rejects', () => {
      sinon.stub(sequelizeUserRepository, 'findByEmail').resolves(userMock);
      sinon.stub(bcryptPasswordProvider, 'validate').rejects();

      return expect(loginService.execute(loginBody.valid)).to.eventually.be.rejected;
    });

    it('should throw an error if validate returns false', () => {
      sinon.stub(sequelizeUserRepository, 'findByEmail').resolves(userMock);
      sinon.stub(bcryptPasswordProvider, 'validate').resolves(false);

      return expect(loginService.execute(loginBody.valid)).to.eventually.be.rejectedWith(ErrorTypes.UnauthorizedError);
    });

    it('should rejects if token generate rejects', () => {
      sinon.stub(sequelizeUserRepository, 'findByEmail').resolves(userMock);
      sinon.stub(bcryptPasswordProvider, 'validate').resolves(true);
      sinon.stub(jwtTokenProvider, 'generate').rejects();

      return expect(loginService.execute(loginBody.valid)).to.eventually.be.rejected;
    });
  });
});