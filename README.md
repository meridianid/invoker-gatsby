![alt text][cover-alt]
[![alt text][mission]](http://meridian.id)

# @invoker/gatsby

  1. [Overview](#overview)
  2. [Getting Started](#getting-started)
      - [Setup Your Development Environment](#setup-your-development-environment)
      - [Running Starter-kit on your machine](#running-starter-kit-on-your-machine)
  3. [What's in The Box](#whats-in-the-box)
      - [Sass with SCSS](#sass-with-scss)
      - [Invoker Components](#invoker-components)
      - [CSS-Modules and classnames](#css-modules-and-classnames)
      - [Invoker Styles](#invoker-styles)
  4. [Plugins](#plugins)
  5. [Learn Gatsby](#learn-gatsby)

## Overview

This is a starter kit repository for building static website using React.js and [Gatsby](https://gatsbyjs.org).

While gatsby already provide a lot of awesome starters, we need something that **works for us** and **empower our workflows** by combining the awesome ecosystem of gatsby and what we already have.

**P.S.** You're expected to have some knowledges about HTML, CSS, and Javascript, Git, and React.js

---

## Getting Started

### Setup Your Development Environment
Before you can start using this starter kit. Make sure you have the following software tools installed on your machine:
1. [Node.js](https://nodejs.org), at least version 10.xx
2. [Git](https://git-scm.com/)
3. [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli), run `npm install -g gatsby-cli` to install it on your machine

### Running Starter-kit on your machine
To download and run the starter kit on your machine, run the following commands:

```shell
git clone https://github.com/meridianid/invoker-gatsby.git YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
git remote remove origin
npm install
npm run start
```

---

## What's in The Box

This starter-kit provides the following items out of the box

### Sass with SCSS
We are using Sass with SCSS as the official styling language for every project at Meridian.id

### Invoker Components
Sets of UI primitives and components built with React.js included locally with it's own styles file.

### CSS-Modules and classnames
**CSS-modules** is a locally scoped styling for a better developer experiences. To use css-modules, you just need to change your scss filename into `filename.module.scss` and import it on top of your component file.

While **classnames** is a library to help you combining two or more styles inside a className props.

```scss
// styling.module.scss

.brand {
  color: 'teal';
}

.heading {
  font-size: 48px;
}

```

```javascript
// Component.js

// import your style and classnames library
import styles from './filename.module.scss'
import cx from 'classnames'

// And use it on your Component
<Component className={cx(styles.brand, styles.heading)}/>

```

### Invoker Styles
An SCSS implementation of styling guidelines at Meridian.id included locally in the `src/assets/` for a better customization and flexibility.

The styling consist of 3 main files, which are:
* **invoker-base**, a basic styling to reset browsers default styles
* **invoker-layouts**, implementation for container, row, and columns to design page layout
* **invoker-tokens**, sets of token variables, mixins, and functions that you can import and then use in your style files. You can adjust the value of the tokens to match your project brand and needs.

#### Using the Styles
While `invoker-base` and `invoker-layouts` should only imported once on the root/parent component (you can check the implementation on `<Default>` component), to use `invoker-tokens` you need to import them by adding `@import src/tokens` on top of your style files.

And to prevent the inconvenient of typing the import syntax manually, we provide a snippet that you can add to your `global.code-snippets` on VS-Code

```
"Simple tokens import": {
  "prefix": "impcss",
  "body": [
  "@import 'src/tokens';",
  "",
  ".root {",
    "\t${0:Write your properties here}",
  "}"
  ],
  "description": "Simple tokens import from src"
},
```

And then you can just type `impcss` in your style files then press `tab` to use the snippets. Voila!

---

## Plugins
* **gatsby-plugin-google-analytics**
* **gatsby-plugin-gtag**,
* **gatsby-plugin-manifest**,
* **gatsby-plugin-nprogress**,
* **gatsby-plugin-offline**,
* **gatsby-plugin-react-helmet**,
* **gatsby-plugin-react-svg**,
* **gatsby-plugin-sitemap**,
* **gatsby-plugin-robots-txt**,
* **gatsby-plugin-sass**,
* **gatsby-plugin-sharp**,
* **gatsby-source-filesystem**,
* **gatsby-transformer-sharp**,

---

## Learn Gatsby

Complete documentation, guidelines, and tutorials are available at [Gatsby.js Official Website](https://www.gatsbyjs.org/)

[title]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/title.png "Building website 101"
[cover]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/cover.png "Building website 101"
[cover-alt]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/cover-alt.png "Building website 101"
[mission]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/mission.png "Meridian.id"