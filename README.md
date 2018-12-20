# Js_Test_B.

## Getting started

Vá até o diretorio /frontEnd pelo terminal e instale

```
npm install -g json-server
```
Em seguida instale as dependência

```
npm i
```
Execute o web server

```
npm start
```
Vá até o repositorio /backEnd e inicie o server

```
json-server --watch db.json
```

Abra o navegador no caminho [http://localhost:5000/](http://localhost:5000/)

## Comments

A aplicação ainda consta com um pequeno bug na paginação, quando chega na ultima pagina e acontece um click no 'limpar' a view apresentada volta para a chamada default que seria a página 1 entretanto o contador ainda ésta na ultima página.

