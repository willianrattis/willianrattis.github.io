# README

## Sobre

Portfólio pessoal de Willian Rattis, publicado em willianrattis.com.

## Stack

Site estático: HTML, CSS e JavaScript puro. Sem framework, sem processo de build, sem
gerenciador de pacotes.

## Estrutura do conteúdo

- `db/db.js` — conteúdo bilíngue (pt-BR e en-US): biografia, skills, trabalhos em
  destaque, experiência e educação.
- `js/i18n.js` — textos de interface (navegação, títulos, hero) e a lógica de idioma
  ativo.
- `js/modern-app.js` — renderiza o conteúdo de `db/db.js` na página e controla as
  interações (troca de idioma, animações).

## Executando localmente

Não há processo de build. Basta servir o diretório com qualquer servidor de arquivos
estáticos, por exemplo:

```
python3 -m http.server 8000
```

E acessar http://localhost:8000.

## Deploy

O site é publicado no GitHub Pages. O arquivo `CNAME` aponta o domínio próprio
(willianrattis.com) para a branch servida pelo Pages; o deploy é o próprio push para essa
branch.

## Contato

- E-mail: willian.rattis@gmail.com
- LinkedIn: https://linkedin.com/in/willianrattis
- GitHub: https://github.com/willianrattis
