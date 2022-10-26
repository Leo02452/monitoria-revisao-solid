<h1>Código desenvolvido na monitoria de revisão sobre os princípios de SOLID<h1>

A proposta foi criar uma rota de login respeitando os principios de SOLID usando NODE js, Typescript, Express e Mongoose.
Quando a rota foi finalizada, trocamos o Mongoose pelo Sequelize e precisamos alterar somente um arquivo, que é a factory, e a aplicação continuou funcionando.


Para rodar o projeto:

Pré requisitos
  Git
  Node
  Mongodb
  MySQL

Clone o projeto
Entre dentro da pasta
Instale as dependências

Para utilizar a rota com MySQL/Sequelize:
Para compilar o código rode o comando npm run build 
Para criar o banco (ou restaurá-lo) rode o comando npm run db:reset
Para rodar a aplicação rode o comando npm run dev

Para utilizar a rota com MongoDB/Mongoose:
Vá até o caminho src/factories e abra o arquivo LoginControllerFactory.ts
Descomente o repositório do Mongoose, comente o do Sequelize e troque o userRepository no LoginService
Para iniciar a aplicação rode o comando npm run dev
Para criar o banco, faça uma requisição do tipo GET para a rota '/seeder'

