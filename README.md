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