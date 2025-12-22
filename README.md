#  Proposta Técnica – Avaliação Backend

## 🎯 Objetivo

Avaliar a capacidade de projetar e construir uma API RESTful com operações CRUD para usuários e um sistema de autenticação JWT, utilizando **TypeScript**. A solução deve ser simples e demonstrar boas práticas de engenharia de software, com foco em código limpo, modular e de fácil manutenção.

## Instruções sobre como rodar o projeto

* **Clonar o repositório:**
    * git clone https://github.com/PedroPsy/Proposta-T-cnica-Avalia-o-Backend.git

* **Instalar dependencias do projeto (Dentro da pasta do projeto):**
    * npm install

* **Configurar variáveis de ambiente**
    * O repositório tem um arquivo exemplo chamado .env.example. Copie ele para criar seu .env real
    
* **Criar o banco e rodar migrations**
    * npx prisma generate
    * npx prisma migrate dev --name init


* **Rodar a API em modo desenvolvimento**
    * npm run dev

* **Funcionalidades:**
    * **Módulo de Usuários:**
        * `POST /users`: Criação de usuário.
        * `GET /users`: Listagem de usuários com suporte a **paginação**.
        * `GET /users/:id`: Busca de usuário por ID.
        * `PUT /users/:id`: Atualização de nome e/ou email.
        * `DELETE /users/:id`: Remoção de usuário.
        * `PATCH /users/:id/password`: Alteração de senha.
    * **Módulo de Autenticação:**
        * `POST /auth/login`: Login para obter um token JWT.
        * Implementação de um **middleware** para proteger as rotas de usuário (exceto o login e a criação de usuários).



