# Newest css reset recommended right now

Newest css reset for comfortable work,
suitable for all evergreen browsers
and necessary for high-quality development

## Installation

### 1. Package Manager

```shell
# With npm
npm i @verno.digital/newest-css-reset

# With Yarn
yarn add @verno.digital/newest-css-reset
```

### 2. CDN

```html
<!-- Development version -->
<link rel="stylesheet" href="https://unpkg.com/@verno.digital/newest-css-reset/dist/reset.css" />

<!-- Production version -->
<link rel="stylesheet" href="https://unpkg.com/@verno.digital/newest-css-reset/dist/reset.min.css" />
```

## Detailed description

### Modern css is used:

* `where`
* `all`

### Configuring fonts for macOS

```scss
body {
  -webkit-font-smoothing: antialiased;
}
```

I advise you to compare the typography through the "perfect pixel"
in the finished project, with the design from figma.

### What exactly does

Clears all tags that need to be cleared, except:

* `html`
* `head`
* `audio`
* `svg`

Removes margin and padding.
Without unnecessary specificity, and cluttering css.

Creates a block model for tags that should have `display: block`:

* `input`
* `textarea`
* `section`
* `button`
* `img`
* `svg`
* `picture`
* `video`
* `audio`
* `canvas`
* `iframe`
* `*::before` and `*::after`

Adds `max-width: 100%` and `height: auto` for:

* `img`
* `picture`
* `video`

### Return to the initial styles

There is a need when some tags, such as:
`ol`, `ul` must have built-in styles.
To do this - after connecting
the `newest-css-reset` at the entry point,
write the following entry:

```css
ol, ul {
  all: revert;
}
```

Will cancel the cleanup applied from `newest-css-reset`

### A real-life example

According to seo, it is not recommended to use
tags: u, strong, b, etc.

But we have all met layout tasks when in a blog,
an article is formed through a visual editor that
there is no budget to rewrite/supplement.
In such cases, you can do it in two ways:

* Globally return tags to their initial styles, after enabling `newest-css-reset` at the entry point:

```scss
strong, b, u {
  all: revert;
}
```

* Restrict these BEM tags to a block:

```scss
.blog-content {
  strong, b, u {
    all: revert;
  }
  
  // ...
}
```

## License

MIT
