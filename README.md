# Criação da API de filmes:
O desafio teste da Ubots envolvia criar uma API para um sistema CRUD de filmes, contudo foram propostos os desafios em tópicos, tais eles:<br><br>

● API REST: Criar, Atualizar, Listar, Deletar e Avaliar
filmes;<br>
● Dada uma lista de filmes, o sistema poder ser capaz de indicar um filme que
ainda não foi avaliado;<br>
● O sistema deve utilizar um banco de dados para armazenar as informações dos
filmes;<br><br>

## Setar variáveis de ambiente:
o arquivo *.env.example* é um modelo de variavel de ambiente, após a modificação das variáveis, o arquivo deve ter o nome alterado para *.env*

## O modelo de banco de dados utilizado foi:
```sql
CREATE TABLE IF NOT EXISTS bancoDeFilmes;
USE bancoDeFilmes;

CREATE TABLE filmes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(70) NOT NULL,
    categoria VARCHAR(70) NOT NULL,
    avaliacao INT CHECK (avaliacao BETWEEN 1 AND 5)
);
```



### Banco de dados criado, as rotas disponíveis na API são:
> **GET** */filmes* (retorna todos filmes)<br>
> **GET** */filmes/naoavaliados* (retorna todos filmes não avaliados)<br>
> **POST** */add* (modelo para adicionar filme:)
```json
{
    "title": "Nome do filme",
    "categoria": "Categoria do filme",
    "avaliacao": //aqui pode-se deixar vazio, ou indicar um número entre 1 e 5, ou até mesmo nem incluir avaliacao
}
```
> **DELETE** */filmes/{id}* (deletar o filme de acordo com o id)<br>
> **PUT** */filmes/{id}* (modificar o filme utilizando modelo json do /add)<br>
> **PUT** */filmes/avaliar/{id}* (avaliar filme utilizando modelo json abaixo)
```json
{
    "avaliacao": //numero entre 1 e 5
}
```