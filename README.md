# Site Renorbio

> Este projeto contém uma estrutura básica para a contrução dos sites institucionais.
> Possui suporte ao controle de dependências de bibliotecas de terceiros através do [npm](http://npmjs.com/).

---

## Estrutura do Projeto

```
├── build/                           - configurações de compilação e webpack
├── config/                          - preferências de compilação e servidor
├── src/                             - pasta com o código-fonte do projeto
│   ├── assets/                      - arquivos estátivos (mutáveis durante o desenvolvimento do projeto)
│   ├── components/                  - diretório de componentes do vue (arquivos .vue)
│       ├── basics/                  - componentes de base e extras (listas, breadcrumb, imagem, titulo...)
│       ├── modules/                 - componentes de módulo (notícias, destaques, documentos, formulários...)
│       ├── pages/                   - componentes de página (index, notícias, sobre, contato...)
│   ├── scripts/                     - diretório de scripts .js
│       ├── router/                  - configurações de rotas
│       ├── services/                - serviços (consumo de dados das APIs)
│       ├── utils/                   - funções úteis em javascript
│       ├── config.js                - configurações gerais do projeto (nome, autor, url de APIs...)
│   ├── styles/                      - diretório de arquivos de estilo (sass)
│       ├── abstracts/               - estruturas abstratas (variáveis, funções, mixins e placeholders)
│       ├── basics/                  - estilos globais (tipografia, cor de fundo padrão, )
│       ├── custom/                  - estilos personalizados (temas, regras de estilo de impressão)
│       ├── vendor/                  - recursos de terceiros - apenas sass - (include-media, bootstrap, etc)
│       ├── main.scss                - arquivo principal dos imports do sass
│   ├── App.vue                      - componente principal do site
│   ├── main.js                      - instância principal do vue
├── static/                          - diretório de arquivos estáticos (não mutáveis durante o desenvolvimento)
├── .editorconfig                    - configurações para editores de código
├── .eslintignore                    - configurações da
├── .eslintrc.js                     - configurações de parser de código
├── .gitignore                       - configurações de arquivos ignorados pelo git
├── .htaccess                        - configurações de reescrita de url
├── .postcssrc.js                    - configurações do postcss para injeção de prefixos cross-browser
├── index.html                       - *dispensa descrição*
├── package.json                     - configurações de pacotes de dependências do projeto
```

---

## Ambiente do Projeto

* [Instalação do GIT](https://git-scm.com/downloads)
* [Instalação do NodeJS](https://nodejs.org/en/download/package-manager/)

---

## Principais Comandos

``` bash
# Instalação das dependências
npm install

# Compilar para desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Compilar para produção com bundle analyzer report
npm run build --report

# Rodar no servidor de testes
npm run test
 - Obs.: antes de rodar o comando, deve ser altedo em index.html url base para a pasta do projeto
```

Para mais detalhes, favor olhar o [manual](http://vuejs-templates.github.io/webpack/) e a [documentação](http://vuejs.github.io/vue-loader).
