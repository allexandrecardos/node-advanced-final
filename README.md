# Projeto Final NodeJS

### Descrição

Este projeto consiste na criação de uma API RESTful.

## Requisitos Não Funcionais

**RNF01: Formato da API**
- A aplicação deve ser desenvolvida no formato de uma API RESTful para garantir uma arquitetura padronizada e interoperável.

**RNF02: Linguagem e Framework**
- O projeto deve ser desenvolvido utilizando a linguagem JavaScript, com o framework Express.js para facilitar o desenvolvimento de rotas e middlewares.

**RNF03: Banco de Dados**
- A aplicação deve utilizar um banco de dados, que pode ser relacional (por exemplo, MySQL) ou não relacional (por exemplo, MongoDB), para armazenar os dados dos usuários, produtos e carrinho de compras.

**RNF04: Autenticação com JWT**
- Toda e qualquer forma de autenticação na API deve ser feita utilizando JSON Web Tokens (JWTs) para garantir segurança e autorização adequadas.

**RNF05: Estrutura da API**
- A estrutura da API deve seguir boas práticas de organização de código, incluindo diretórios para controllers, rotas, configurações de banco de dados, middlewares, etc. O projeto deve utilizar um arquivo **.env** para configurar variáveis de ambiente.

## Requisitos Funcionais

**RF01: Permissão de Administrador**
- Apenas usuários *admin* conseguem deletar ou atualizar um registro, para a criação de produtos também é necessário ser um administrador.

## Tecnologias Utilizadas
- JavaScript
- Node.js
- Express.js
- PostgreSQL (Docker)
- JSON Web Tokens (JWT)

## Instalação e Execução
1. Clone o repositório para sua máquina local.
```bash
  git clone https://github.com/allexandrecardos/node-advanced-final.git
```

2. Certifique-se de ter o [NodeJS](https://nodejs.org/en/download/current) instalado. 

3. Certifique-se de configurar corretamente o arquivo **.env** com as variáveis de ambiente necessárias, como informações de conexão com o banco de dados e chaves JWT.<br>
**Obs: Caso não tenha o arquivo, crie e cole as variáveis abaixo.**
```bash
  APP_PORT=3000
  JWT_SECRET=I4GKDqrvGhDZHMwXZGGdjgD1NR3pk5bFXXfL5s5aTo0=

  DB_USER=root
  DB_PASSWORD=root
  DB_DATABASE=postgres
  DB_HOST=localhost
  DB_DIALECT=postgres
```

4. Certifique-se de ter o [Docker](https://www.docker.com/get-started/) instalado e rodando no seu ambiente.

5. Instale as dependências do projeto.
```bash
  npm install
```

6. Execute o comando docker para subir o banco de dados (PostgreSQL).
```bash
  docker compose up -d
```

7. Crie as tabelas pelo sequelize-cli (migrations).
```bash
  npx sequelize-cli db:migrate
```

8. Inicie a aplicação.
```bash
  npm run dev
```

9. A API estará disponível para acesso em http://localhost:3000 (ou outra porta, dependendo da configuração).

## Documentação da API - Rotas

### Registar um usuário

```http
  POST /auth/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**|
| `email`      | `string` | **Obrigatório**|
| `password`      | `string` | **Obrigatório**|
| `admin`      | `boolean` | **Obrigatório**|

___

### Logar um usuário

```http
  POST /auth/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**|
| `password`      | `string` | **Obrigatório**|

___

### Deslogar um usuário

```http
  GET /auth/logout
```

___