---
layout: page
title: About
---

# saber-theme-tufte

[![npm](https://badgen.net/npm/v/saber-theme-tufte)](https://npm.im/saber-theme-tufte)

> A [Saber](https://saber.land/) theme inspired by [Tufte](https://edwardtufte.github.io/tufte-css/).

## Install

```bash
yarn add saber-theme-tufte
```

In your `saber-config.yml`:

```yml
theme: tufte
```

This theme works best with following plugins:

- `saber-plugin-query-posts`: Inject `posts` to homepage's `page` prop, generate tag pages

```bash
yarn add saber-plugin-query-posts
```

```yml
plugins:
  - resolve: saber-plugin-query-posts
```

## Layouts

- `post`: For individual blog posts.
- `page`: For normal page with only the header and footer.
- `default`: A home page to show all your posts.

The default page can be customized with a title, subtitle, and description:

```yml
layout: default
# Inject post list as `page.posts` (by saber-plugin-query-posts)
injectAllPosts: true
title:
subtitle: 
description: 
```

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
