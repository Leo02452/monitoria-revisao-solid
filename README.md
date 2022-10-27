<h1>Código da monitoria de revisão sobre os princípios de SOLID</h1>

#### Primeira parte:
A proposta foi criar uma rota de login respeitando os principios de SOLID usando NODE js, Typescript, Express, Sequelize e Mongoose.
Quando a rota foi finalizada, trocamos o Mongoose pelo Sequelize e precisamos alterar somente um arquivo, que é a factory, e a aplicação continuou funcionando.

#### Segunda parte:
A proposta foi testar o método assíncrono da camada de service usando o plugin 'chai-as-promised' do Chai. Além disso, foram usadas as dependências Mocha e Sinon pra realização desses testes.

## Para rodar o projeto:

Pré requisitos
- Git
- Node
- Mongodb
- MySQL

<details>
  <summary><strong>Passos iniciais</strong></summary>

1 - Clone o projeto
```bash
git clone git@github.com:Leo02452/monitoria-revisao-solid.git
```

2- Entre dentro da pasta
```bash
cd monitoria-revisao-solid
```

3 - Instale as dependências
```bash
npm i
```
</details>


<details>
  <summary><strong>Para utilizar a rota com MySQL/Sequelize</strong></summary>

1 - Compile o código
```bash
npm run build
```

2 - Crie (ou restaure) o banco
```bash
 npm run db:reset
```

3 - Inicie a aplicação
```bash
npm run dev
```
</details>

<details>
  <summary><strong>Para utilizar a rota com MongoDB/Mongoose:</strong></summary>

1 - Vá até o caminho src/factories e abra o arquivo LoginControllerFactory.ts

2 - Descomente o repositório do Mongoose, comente o do Sequelize e troque o userRepository no LoginService

3 - Inicie a aplicação
```bash
npm run dev
```
4 - Crie o banco fazendo uma requisição do tipo GET para a rota '/seeder'
</details>


## Para rodar os testes:

Pré requisitos
- Git
- Node
- Mongodb
- MySQL

<details>
  <summary><strong>Passo-a-passo</strong></summary>
  
1 - Clone o projeto
```bash
git clone git@github.com:Leo02452/monitoria-revisao-solid.git
```

2 - Entre dentro da pasta
```bash
cd monitoria-revisao-solid
```

3 - Instale as dependências
```bash
npm i
```

4 - Rode os testes
```bash
npm test
```
</details>


## :memo: Autor

Desenvolvido por Leonardo Araujo

Email: leonardo_02452@hotmail.com

Github: https://github.com/Leo02452

LinkedIn: https://www.linkedin.com/in/leo02452/

---
