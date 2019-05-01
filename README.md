![alt text][title]
![alt text][cover-alt]
[![alt text][mission]](http://meridian.id)

# @invoker/gatsby
- [@invoker/gatsby](#invokergatsby)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Setup Your Development Environment](#setup-your-development-environment)
    - [Running Starter-kit on your machine](#running-starter-kit-on-your-machine)
  - [What's in The Box](#whats-in-the-box)
    - [Sass(SCSS) Setup](#sassscss-setup)
    - [[@invoker/components](),](#invokercomponents)
    - [[CSS-Modules]() and classnames](#css-modules-and-classnames)
    - [[@invoker/styles](),](#invokerstyles)
      - [Using the Styles](#using-the-styles)
  - [Plugins](#plugins)
  - [Learn Gatsby](#learn-gatsby)

## Overview
> Starter-kit for building static site using [Gatsby](https://gatsbyjs.org)

What's this & Why we build this?

---

## Getting Started

### Setup Your Development Environment
Before you can start using this starter kit. Make sure you have the following software tools installed on your machine:
1. [Node.js](https://nodejs.org), at least version 10.xx
2. [Git](https://git-scm.com/)
3. [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli), run `npm install -g gatsby-cli` to install

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

### Sass(SCSS) Setup
We are using Sass(SCSS) as the official styling language for every project at Meridian.id

### [@invoker/components](),
sets of UI primitives and components built with React.js also included locally with it's own styles file.

### [CSS-Modules]() and classnames
CSS-modules is a locally scoped styling for a better developer experiences. To use css-modules, you just need to change your scss filename into `filename.module.scss` and import it on top of your component file.

While 'classnames' (library) helps you combining two or more styles to your className attribute

```scss
// styling.module.scss

.brand {
  color: 'coral';
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

### [@invoker/styles](),
a Sass(SCSS) implementation of styling guidelines at Meridian.id included locally in the `src/assets/` for a better customization and flexibility.

The styling consist of 3 main files, which are:
* **invoker-base**, a basic styling to reset browsers default styles
* **invoker-layouts**, implementation for container, row, and columns to design page layout
* **invoker-tokens**, sets of token variables, mixins, and functions that you can import and then use in your style files. You can adjust the value of the tokens to match your project brand and needs.

#### Using the Styles
While `invoker-base` and `invoker-layouts` should only imported once on the root/parent component (you can check the implementation on <Default> component), to use `invoker-tokens` you need to import them by adding `@import src/tokens` on top of your style files.

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

---

## Plugins

What're plugins included in this starter-kit?

---

## Learn Gatsby

Complete documentation, guidelines, and tutorials are available at [Gatsby.js Official Website](https://www.gatsbyjs.org/)

[title]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/title.png "Building website 101"
[cover]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/cover.png "Building website 101"
[cover-alt]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/cover-alt.png "Building website 101"
[mission]: https://raw.githubusercontent.com/meridianid/invoker-gatsby/master/docs/mission.png "Meridian.id"