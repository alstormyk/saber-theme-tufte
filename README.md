# Work in Progress

# saber-theme-tufte

[![npm](https://badgen.net/npm/v/saber-theme-tufte)](https://npm.im/saber-theme-tufte)

> A Saber theme inspired by Tufte.

## Install

```bash
yarn add saber-theme-vuepress
```

In your `saber-config.yml`:

```yml
theme: vuepress
```

This theme works best with following plugins:

- `saber-plugin-query-posts`: Inject `posts` to homepage's `page` prop, generate tag pages

```bash
yarn add saber-plugin-query-posts markdown-it-div
```

```yml
plugins:
  - resolve: saber-plugin-query-posts
```
and markdown-it-div
```yml
markdown:
  plugins:
    - resolve: markdown-it-div
```

## Layouts

- `post`: For individual blog posts.
- `page`: For normal pages with a sidebar.
- `default`: A home page to show all your posts.

## Site Config

Configure site title, description etc in your `saber-config.yml`:

```yml
siteConfig:
  title: My Site
  description: About this website.
  author: My Name
  email: my@email.com
```

## Theme Config

### Navbar

Configure `nav` to show a set of links in header and optional repository link:

```yml
themeConfig:
  nav:
    - text: Home
      link: /
    - text: About
      link: /about.html
```



## License

MIT.
