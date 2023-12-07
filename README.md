# Web Scraping Wikipedia

## Visão Geral

Esta documentação fornece informações sobre um projeto de web scraping focado em obter dados da Wikipedia. O projeto consiste em um servidor Node.js usando o Express, o Puppeteer para web scraping, e uma interface simples para interação do usuário.

## Estrutura do Projeto

O projeto está organizado em diversas partes:

### Servidor (Node.js)

#### `app.js`

O arquivo `app.js` configura a aplicação Express, define middlewares e rotas.

#### `controller.js`

O arquivo `controller.js` contém uma classe de controle responsável por lidar com requisições e interagir com o scraper Puppeteer.

### Web Scraping (Puppeteer)

#### `puppeteer.js`

O arquivo `puppeteer.js` define a classe `WikipediaInfo` que utiliza o Puppeteer para fazer scraping de dados da Wikipedia.

### Front-end (HTML, CSS, JavaScript)

#### `index.html`

O arquivo `index.html` fornece uma interface de usuário simples para inserir uma consulta de pesquisa e exibir os dados obtidos.

#### `style.css`

O arquivo `style.css` contém estilos para a interface do usuário.

#### JavaScript em `script.js`

Esta seção contém código JavaScript responsável por lidar com a entrada do usuário, fazer requisições para o servidor e atualizar a interface.

## Executando o Projeto

1. Certifique-se de que o Node.js e o npm estejam instalados em sua máquina.
2. Instale as dependências do projeto com o comando: `npm install` ou `yarn install`.
3. Inicie o servidor com o comando: `npm run dev` ou `yarn dev`.
4. Abra um navegador da web e acesse `http://localhost:3333` para acessar a interface do usuário.
5. Insira uma consulta de pesquisa no campo de entrada e observe os dados obtidos.

## Dependências

O projeto depende dos seguintes pacotes npm:

- `express`: Framework web para Node.js.
- `puppeteer`: Biblioteca de automação de navegador em modo headless.
- `cors`: Middleware para permitir o Compartilhamento de Recursos de Origem Cruzada (CORS).

## Licença

Este projeto é distribuído sob a [Licença MIT](./LICENSE). Consulte o arquivo [LICENSE](./LICENSE) para obter detalhes.

## Notas Importantes

- O servidor é executado na porta 3333 por padrão. Certifique-se de que esta porta esteja disponível.
- A lógica de web scraping é implementada usando o Puppeteer, com foco no site da `Wikipedia`.
- A interface do usuário é simples e interage com o servidor por meio de requisições assíncronas.

Sinta-se à vontade para explorar e modificar o código conforme necessário para o seu caso de uso específico.
