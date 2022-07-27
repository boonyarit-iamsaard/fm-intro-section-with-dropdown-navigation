# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building real projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/boonyarit-iamsaard/fm-intro-section-with-dropdown-navigation)
- Live Site URL: [Live Preview](https://boonyarit-iamsaard.github.io/fm-intro-section-with-dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Reduce render-blocking resources using media attributes for conditional CSS

See the code snippet below:

```html
<!-- Use the media attribute for conditional CSS -->
<link rel="stylesheet" media="screen" href="./static/css/main.css" />
<link
  rel="stylesheet"
  media="screen and (max-width: 899px)"
  href="./static/css/media-mobile.css"
/>
<link
  rel="stylesheet"
  media="screen and (min-width: 900px)"
  href="./static/css/media-desktop.css"
/>
```

Use the [Google Web Fonts Helper](https://google-webfonts-helper.herokuapp.com/fonts) to generate local `@font-face`

See the code snippet below:

```css
/* epilogue-500 - latin */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local(''),
    url('./static/fonts/epilogue-v13-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('./static/fonts/epilogue-v13-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
```

### Continued development

- [ ]

### Useful resources

- [[Scrimba] Build a space travel website by Kevin Powell](https://scrimba.com/learn/spacetravel) - This free resource helped me on how to approach responsive navigation menu.

## Author

- Website - [GitHub](https://github.com/boonyarit-iamsaard)
- Frontend Mentor - [@boonyarit-iamsaard](https://www.frontendmentor.io/profile/boonyarit-iamsaard)
