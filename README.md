# React + Vite + Axios

### Instalar bootstrap por meio do node:

```bash
npm install bootstrap --save
```
- "--save" é para salvar a dependência no package.json
- A pasta do bootstrap será criada em node_modules

### Instalar bootstrap por meio do node:

```bash
npm install bootstrap --save
```
- "--save" é para salvar a dependência no package.json
- A pasta do bootstrap será criada em node_modules

## Axios
Axios é uma biblioteca JavaScript que permite fazer requisições HTTP a partir do navegador ou do Node.js. Ela fornece uma interface fácil de usar para realizar operações assíncronas e manipular dados JSON.

Para instalar o Axios, você pode executar o seguinte comando no terminal:

```bash
npm install axios --save
```

Após a instalação, você pode importar o Axios no seu código da seguinte maneira:

```javascript
import axios from 'axios';
```

Agora você pode usar o Axios para fazer requisições HTTP. Por exemplo, para fazer uma requisição GET para uma API:

```javascript
axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
```

O Axios também suporta outros métodos HTTP, como POST, PUT, DELETE, etc. Você pode encontrar mais informações sobre como usar o Axios na documentação oficial: [Axios Documentation](https://axios-http.com/docs/intro)

## react router dom
O React Router é uma biblioteca de roteamento para React que permite navegar entre diferentes componentes em uma aplicação React. Ele fornece uma maneira fácil de definir rotas e renderizar componentes com base na URL atual.

Para instalar o React Router, você pode executar o seguinte comando no terminal:

```bash
npm install react-router-dom --save
```

Após a instalação, você pode importar o React Router no seu código da seguinte maneira:

```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
```

Agora você pode definir rotas em sua aplicação React usando o componente `Route` e renderizar componentes com base na URL atual. Por exemplo:

```javascript
<Router>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
</Router>
```

O React Router também suporta rotas aninhadas, redirecionamentos, parâmetros de URL e muito mais. Você pode encontrar mais informações sobre como usar o React Router na documentação oficial: [React Router Documentation](https://reactrouter.com/web/guides/quick-start)

### Componentes do React Router

- `BrowserRouter`: Um componente que envolve toda a aplicação e fornece a funcionalidade de roteamento.
- `Route`: Um componente que define uma rota e renderiza um componente com base na URL atual.
- `Switch`: Um componente que renderiza o primeiro `Route` ou `Redirect` que corresponde à URL atual.
- `Link`: Um componente que cria um link para outra rota em vez de recarregar a página.
- `Redirect`: Um componente que redireciona para outra rota.