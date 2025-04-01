# Site Renorbio

> Este projeto contém uma estrutura básica para a contrução dos sites institucionais.
> Possui suporte ao controle de dependências de bibliotecas de terceiros através do [npm](http://npmjs.com/).

## Instruções para Hospedagem nos Servidores da UFAL (PHP 8.2 + MySQL 8.0)

### Problema Identificado

Ao tentar hospedar o site nos servidores da UFAL, o link gerado para acessar a página inicial (https://sites.ufal.br/a0fba4eb17/) estava retornando "página não encontrada".

### Soluções Implementadas

Foram realizadas as seguintes correções no projeto:

1. **Correção da tag base no arquivo index.html**:
   - A tag `<base href="/">` foi alterada para `<base href="/a0fba4eb17/">` para corresponder ao caminho base configurado no Vue.js.

2. **Criação de arquivo .htaccess na pasta public**:
   - Foi criado um arquivo .htaccess na pasta public com as regras de redirecionamento necessárias para aplicações SPA (Single Page Application).

3. **Correção do arquivo index.php**:
   - O arquivo index.php foi atualizado para incluir corretamente o arquivo index.html da pasta public.

4. **Criação de arquivo index.html na raiz**:
   - Foi criado um arquivo index.html na raiz do projeto para redirecionar para o caminho correto.

### Instruções para Hospedagem

1. Execute o comando de build para gerar os arquivos otimizados:
   ```
   npm run build
   ```

2. Isso criará uma pasta `dist` com todos os arquivos necessários para a hospedagem.

3. Copie **todos** os arquivos da pasta `dist` para a pasta `public` do hosting da UFAL.

4. Certifique-se de copiar também os seguintes arquivos para a raiz do hosting:
   - `.htaccess` (da raiz do projeto)
   - `index.php` (da raiz do projeto)
   - `index.html` (da raiz do projeto)

5. Verifique se todos os arquivos têm as permissões corretas no servidor:
   - Arquivos: 644 (rw-r--r--)
   - Pastas: 755 (rwxr-xr-x)

6. Se o site ainda não estiver acessível, tente limpar o cache do navegador ou acessar em uma janela anônima.

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
