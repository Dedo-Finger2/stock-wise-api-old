## 1. Descrição

Este projeto se consiste num sistema de gestão de estoque domiciliar onde o usuário será capaz de gerir os produtos que possui em casa, podendo manter assim um controle estável do que está em quase em falta em casa. Ao mesmo tempo o sistema consta com um algoritmo que é capaz de gerar listas de compras automáticas com base na quantidade mínima aceita em estoque de determinado produto, possibilitando assim o usuário gerar listas de compras com exatamente o que está em em risco de ficar em falta, tornado todo o processo mais simples e automático. E por cima de tudo isso o sistema também constará com um log do preço pago por cada produto nas compras feitas, dessa forma tornando possível o usuário saber quanto foi pago no produto na compra anterior, possibilitando assim uma consciência economica ao usuário, que por sua vez buscará um preço mais barato e evitará gastar mais do que foi gasto na compra anterior.

### 1.1 Arquitetura

O projeto usará os principais princípio de SOLID se será arquitetado seguindo um padrão MVC. ALém disso, os padrões de projeto: Factory e Repository serão usados também na arquitetura do projeto. Assim como a definição de casos de uso. Na autenticação o sistema usará o Magic Link Auth como meio principal de autenticação.

```mindmap
- Project
	- src
		- config
		- utils
			- interfaces
			- types
		- errors
		- factories
		- use-cases
		- repositories
			- postgres
		- http
			- controllers
			- middlewares
			- routes
		- server.ts
	- .env
	- tsconfig
```


### 1.2 Tecnologias

* Fastfiy
* Zod
* NodeJS
* ShadcnUI
* ReactJS

## 2. Requisitos

### 2.1 RFs

* [ ] Deve ser possível autenticar usuários no sistema
* [ ] Deve ser possível deletar uma conta
* [ ] Deve ser possível criar um estoque
* [ ] Deve ser possível editar um estoque
* [ ] Deve ser possível cadastrar um produto
* [ ] Deve ser possível editar um produto
* [ ] Deve ser possível deletar um produto
* [ ] Deve ser possível visualizar detalhes do produto
* [ ] Deve ser possível ver um log do preço do produto
* [ ] Deve ser possível cadastrar uma marca
* [ ] Deve ser possível editar uma marca
* [ ] Deve ser possível deletar uma marca
* [ ] Deve ser possível visualizar detalhes de uma marca
* [ ] Deve ser possível cadastrar unidades de medida
* [ ] Deve ser possível editar unidades de medida
* [ ] Deve ser possível deletar unidades de medida
* [ ] Deve ser possível visualizar detalhes de unidades de medida
* [ ] Deve ser possível criar categorias
* [ ] Deve ser possível editar categorias
* [ ] Deve ser possível deletar categorias
* [ ] Deve ser possível criar tipos para os produtos
* [ ] Deve ser possível editar os tipos dos produtos
* [ ] Deve ser possível deletar os tipos dos produtos
* [ ] Deve ser possível visualizar os tipos dos produtos
* [ ] Deve ser possível visualizar um gráfico informativo
* [ ] Deve ser possível criar listas de compras manualmente
* [ ] Deve ser possível criar listas de compras automaticamente
* [ ] Deve ser possível editar listas de compras
* [ ] Deve ser possível deletar listas de compras
* [ ] Deve ser possível completar listas de compras

### 2.2 RNs

* [ ] Não deve ser possível existir dois usuários com o mesmo email
* [ ] Usuários não podem ter mais de um estoque
* [ ] Não podem existir dois produtos com o mesmo nome da mesma marca vinculados no mesmo usuário
* [ ] Não podem existir duas marcas com o mesmo nome vinculadas ao mesmo usuário
* [ ] Não podem existir duas categorias com o mesmo nome vinculadas ao mesmo usuário
* [ ] Não podem existir dois tipos de produto com o mesmo nome vinculadas ao mesmo usuário
* [ ] Não podem existir duas unidades de medida com o mesmo nome vinculadas ao mesmo usuário
* [ ] Usuários só podem executar ações de CRUD com as entidades que foram criadas por eles mesmos
* [ ] Ao completar uma lista de compras o estoque deve ser editado automaticamente adicionando os novos números
* [ ] Um novo log de preço de produtos deve ser criado assim que uma lista de compras for completada

### 2.3 RNFs

* [ ] Antes de cada deleção uma confirmação deve ser mostrada
* [ ] As imagens dos produtos devem possuir um tamanho máximo de 100x100px
* [ ] O nome de: categorias, tipos de produto e marcas devem ser normalizados para suas versões com as iniciais maiúsculas e separados por hífen
* [ ] O nome das unidades de medida devem ser em caixa alta

## 3. Banco de dados

## 4. Escopo

* **Escopo atual**
  * **Requisitos funcionais**
    * [ ] Deve ser possível autenticar usuários no sistema
    * [ ] Deve ser possível deletar uma conta
    * [ ] Deve ser possível criar um estoque
    * [ ] Deve ser possível editar um estoque
    * [ ] Deve ser possível cadastrar um produto
    * [ ] Deve ser possível editar um produto
    * [ ] Deve ser possível deletar um produto
    * [ ] Deve ser possível ver um log do preço do produto
    * [ ] Deve ser possível cadastrar unidades de medida
    * [ ] Deve ser possível editar unidades de medida
    * [ ] Deve ser possível deletar unidades de medida
    * [ ] Deve ser possível criar tipos para os produtos
    * [ ] Deve ser possível editar os tipos dos produtos
    * [ ] Deve ser possível deletar os tipos dos produtos
    * [ ] Deve ser possível criar listas de compras manualmente
    * [ ] Deve ser possível criar listas de compras automaticamente
    * [ ] Deve ser possível editar listas de compras
    * [ ] Deve ser possível deletar listas de compras
    * [ ] Deve ser possível completar listas de compras

  * **Regras de negócio**
    * [ ] Não deve ser possível existir dois usuários com o mesmo email
    * [ ] Usuários não podem ter mais de um estoque
    * [ ] Não podem exisitr dois produtos com o mesmo nome vinculados no mesmo usuário
    * [ ] Não podem existir dois tipos de produto com o mesmo nome vinculadas ao mesmo usuário
    * [ ] Não podem existir duas unidades de medida com o mesmo nome vinculadas ao mesmo usuário
    * [ ] Usuários só podem executar ações de CRUD com as entidades que foram criadas por eles mesmos
    * [ ] Ao completar uma lista de compras o estoque deve ser editado automaticamente adicionando os novos números
    * [ ] Um novo log de preço de produtos deve ser criado assim que uma lista de compras for completada

  * **Requisitos não funcionais**
    * [ ] Antes de cada deleção uma confirmação deve ser mostrada
    * [ ] O nome de: categorias, tipos de produto e marcas devem ser normalizados para suas versões com as iniciais maiúsculas e separados por hífen
    * [ ] O nome das unidades de medida devem ser em caixa alta

  * **Módulos**
    * [X] **Autenticação**
      * [X] Envio de email
      * [X] Autenticação usando cookie
      * [X] Token de confirmação no email

    * [ ] **Estoque do usuário**
      * [ ] Cadastro
      * [ ] Atualização de dados da conta
      * [ ] Deleção da conta

    * [ ] **Produtos**
      * [ ] Cadastro
      * [ ] Edição dos dados
      * [ ] Deleção

    * [ ] **Unidade de medida**
      * [ ] Cadastro
      * [ ] Edição dos dados
      * [ ] Deleção

    * [ ] **Tipo de produto**
      * [ ] Cadastro
      * [ ] Edição dos dados
      * [ ] Deleção

    * [ ] **Lista de compras**
      * [ ] Cadastro manual
      * [ ] Cadastro automático
      * [ ] Edição dos dados
      * [ ] Deleção
      * [ ] **Completar uma lista**
        * [ ] Atualização do preço dos produtos
        * [ ] Adição da quantidade no estoque

* **Não escopo**

  * **Requisitos funcionais**
    * [ ] Deve ser possível visualizar detalhes do produto
    * [ ] Deve ser possível ver um log do preço do produto
    * [ ] Deve ser possível cadastrar uma marca
    * [ ] Deve ser possível editar uma marca
    * [ ] Deve ser possível deletar uma marca
    * [ ] Deve ser possível visualizar detalhes de uma marca
    * [ ] Deve ser possível visualizar detalhes de unidades de medida
    * [ ] Deve ser possível visualizar os tipos dos produtos
    * [ ] Deve ser possível visualizar um gráfico informativo

  * **Regras de negócio**
    * [ ] Não podem existir dois produtos com o mesmo nome da mesma marca vinculados no mesmo usuário
    * [ ] Não podem existir duas marcas com o mesmo nome vinculadas ao mesmo usuário

  * ***Requisitos não funcionais***
    * ...