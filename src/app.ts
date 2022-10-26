import * as express from 'express';
import 'express-async-errors';
import loginRoute from './routes/LoginRoute';
import mongooseSeeder from './rotadireta/seederMongoose';
import errorHandle from './middlewares/errorHandle';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    this.app.use(express.json());
    this.app.use(mongooseSeeder);
    this.app.use(loginRoute);
    this.app.use(errorHandle);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
