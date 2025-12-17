#  Proposta Técnica – Avaliação Backend

## 🎯 Objetivo

Avaliar a capacidade de projetar e construir uma API RESTful com operações CRUD para usuários e um sistema de autenticação JWT, utilizando **TypeScript**. A solução deve ser simples e demonstrar boas práticas de engenharia de software, com foco em código limpo, modular e de fácil manutenção.

---

## Requisitos Técnicos

* **Linguagem e Ferramentas:**
    * Implementação em **TypeScript**.
    * Uso de um framework web minimalista (ex: Express, Fastify).
    * Escolha de um ORM/biblioteca para acesso a dados (ex: Prisma, TypeORM).
    * Bibliotecas para validação de dados, hashing de senhas e JWT (ex: Zod, Bcryptjs, jsonwebtoken).
* **Arquitetura:**
    * Código **modular** e com **separação de responsabilidades**.
    * Respostas padronizadas com status HTTP adequados.
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

---

##  Entrega

* Link para o repositório público (GitHub).
* Um arquivo `README.md` no repositório sobre como configurar e rodar o projeto.

---
