# ComandoWeb Ionic

Este é o repositório do projeto ComandoWeb Ionic, um projeto baseado em Ionic. Este README fornece as informações necessárias para configurar e iniciar o projeto.

## Pré-requisitos 📋

Certifique-se de que as seguintes dependências estejam instaladas em seu sistema antes de começar:

- [Node.js](https://nodejs.org/): Certifique-se de que o Node.js esteja instalado.
- [NPM (Node Package Manager)](https://www.npmjs.com/): O NPM geralmente é instalado junto com o Node.js.
- [Angular CLI](https://cli.angular.io/): Instale o Angular CLI globalmente com o seguinte comando:
  ```
  npm install -g @angular/cli
  ```
- [Ionic CLI](https://ionicframework.com/docs/cli): Instale o Ionic CLI globalmente com o seguinte comando:
  ```
  npm install -g @ionic/cli
  ```

## Clonando o Repositório 🔎

Para clonar este repositório em sua pasta de desenvolvimento, siga os passos abaixo:

1. Execute o comando Git Clone com a URL ou SSH do repositório:

   ```
   git clone -b <nome_da_branch> --single-branch <URL_do_repositório>
   ```

   Substitua "URL ou SSH" pela URL ou SSH do repositório CAADS Web.

2. Navegue até o diretório do projeto:

   ```
   cd nome_do_projeto
   ```

   Substitua "nome_do_projeto" pelo nome do diretório do projeto.

3. Instale as dependências do Node no projeto:

   ```
   npm install
   ```

   Isso instalará todas as dependências necessárias para o projeto.

## Executando o Projeto 🧑‍💻

Após clonar o repositório e instalar as dependências, você pode iniciar o projeto com os comandos apropriados do Angular. Certifique-se de estar no diretório do projeto.

Para iniciar o servidor de desenvolvimento do Angular, use o seguinte comando:

```
ng serve
```

Para utilizar o do Ionic, use o seguinte comando:

```
ionic serve
```

## [Prefixos dos Commits](https://github.com/JuniorLima22/padroes-e-nomenclaturas-no-git#prefixos-dos-commits)
- 📚 [DOCS]: apenas mudanças de documentação.
- ✨ [FEAT]: Adição de uma nova feature ao projeto, componente, etc.
- 🐞 [FIX]: Correção de um bug.
- ⚡ [PERF]: Melhoria de performance.
- 🛠️ [REFACTOR]: Refatoração do código que não adiciona uma funcionalidade nem corrige um bug.
- 🎨 [STYLE]: Mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc).
- 🧪 [TEST]: Adição ou correção de testes.
- 🚀 [IMPROVEMENT]: Melhoria em algo já existente, seja de performance, escrita, layout, etc.

O projeto estará disponível no seu navegador em http://localhost:4200 (Angular) ou http://localhost:8100 (Ionic).