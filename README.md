# CSS Playground (css uHost)
This project focus on css.

Dev server: Point your browser at the below address!

[🔽To the main content](#contents)

```
http://127.0.0.1:5173/
```
![image](https://github.com/actionanand/css-uhost/assets/46064269/61e5afe5-1704-427f-ad7c-33bf514466be)
![image](https://github.com/actionanand/css-uhost/assets/46064269/ae704491-2adb-4e2d-a9f8-848ffbf644e5)

## Contents
1. [CSS Specificity](#css-specificity)
2. [Combinators](#combinators)
3. [Box Model & Positioning elements and deep dive inside css](#box-model--positioning-elements-and-deep-dive-inside-css)
4. [Background and Image](#background-and-image)
5. [Sizes & Units](#sizes--units)
6. [Responsive Website](#responsive-website)
7. [Styling Form](#styling-form)
8. [Custom Font](#custom-font)
9. [Flex Box](#flex-box)
10. [CSS Grid](#css-grid)
11. [Transitions & Animations](#transitions--animations)
12. [Guide on Future proof css code](#guide-on-future-proof-css-code)
13. [Sassy CSS](#sassy-css)
14. [Other Resources](#resources-for-vite)

****

## CSS Specificity

![image](https://github.com/actionanand/css-uhost/assets/46064269/aecee362-1955-48f3-9a27-e4a67fb9fa14)
![image](https://github.com/actionanand/css-uhost/assets/46064269/16d7cdb1-f389-4452-b188-0188dab4a106)
![image](https://github.com/actionanand/css-uhost/assets/46064269/73fe75ef-1b50-40f4-af07-ef5a1c9f4e5c)

* The universal selector * has no specificity value (0, 0, 0, 0);

[🔼Back to the top](#contents)

## Combinators

![image](https://github.com/actionanand/css-uhost/assets/46064269/25296f30-4951-46d0-b204-9baa60b3d8f7)
![image](https://github.com/actionanand/css-uhost/assets/46064269/72e9cf15-ea73-4c16-97cf-f0f7ab82c48f)
![image](https://github.com/actionanand/css-uhost/assets/46064269/9e601b59-31d8-44b2-81f4-1b3d94a68028)
![image](https://github.com/actionanand/css-uhost/assets/46064269/212dd5c7-c72a-4a91-858a-8a89a2c77f6f)
![image](https://github.com/actionanand/css-uhost/assets/46064269/482409d1-2f9e-4613-ad48-dbb5553036dc)

[🔼Back to the top](#contents)

## Box Model & Positioning elements and deep dive inside css

![image](https://github.com/actionanand/css-uhost/assets/46064269/2f5b520b-e8d7-41a0-8de5-4f5f78f7158b)
![image](https://github.com/actionanand/css-uhost/assets/46064269/a27e8c48-3c12-4f68-8bda-5f6f1140a052)


1. [Positioning theory](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
2. [More about the "position" property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
3. [The z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
4. [The Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
5. [Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

### Deep Dive on "Margin Collapsing"

1. **Adjacent Siblings**: In this case, the first element might have a margin of 10px  (on all sides let's say) and the second one has 5px  (or 20px  - the values don't matter). **CSS will collapse the margins and only add the bigger one between the elements**. So if we got margins of 10px  and 5px , a 10px  margin would be added between the elements

2. **A parent with children that have a margin**:
     * To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element.

    * If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element.

3. **An empty element with margins**: This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins.

![image](https://github.com/actionanand/css-uhost/assets/46064269/9f2c2b2d-024c-450c-b889-ccf44bc0b042)

### "display: none" vs "visibility: hidden"

* We had a look at `display: none;`  - this value removes the element to which you apply it from the document flow. This means that the element is not visible and it also doesn't **block its position**. Other elements can (and will) take its place instead. **It's still part of the DOM though**, you can still **access it via JavaScript** for example.
* There is an alternative to that though. If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use `visibility: hidden;`. Here it's not removed from the document flow and of course also not from the DOM.

![image](https://github.com/actionanand/css-uhost/assets/46064269/30cd00ab-19df-45d0-b8b5-04a730db78e4)
![image](https://github.com/actionanand/css-uhost/assets/46064269/a35d6b1a-d2d7-4124-8947-9ddc4f29241d)

1. [When Using `!important` is The Right Choice](https://css-tricks.com/when-using-important-is-the-right-choice/)
2. [The `:not()`  pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

### Float and Clear fix

1. [Working With CSS Float And Clear Properties](https://blog.openreplay.com/working-with-css-float-and-clear-properties/)
2. [More on float - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

[🔼Back to the top](#contents)

## Background and Image

![image](https://github.com/actionanand/css-uhost/assets/46064269/c4c28015-896a-46b6-9545-c839b171c8d4)

1. [The background Property - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2. [Styling Images - w3 schools](https://www.w3schools.com/css/css3_images.asp)
3. [Filters - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
4. [Styling SVG - mdn](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)

![image](https://github.com/actionanand/css-uhost/assets/46064269/469d2ad5-6a72-482e-8427-9c28374aaeb9)

[🔼Back to the top](#contents)

## Sizes & Units

* [Hiding Vertical & Horizontal Scrollbars with Pure CSS](https://web.archive.org/web/20180505112131/https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/)

Which will the `%` (percentage) value calculated with ref. to? The answer depends on the `position` property of the html element and the containing block (container), which the element takes as ref. for calculation of percentage.

![image](https://github.com/actionanand/css-uhost/assets/46064269/9369d41a-0852-4c94-83eb-3e8d26f46abd)

### The Containing Block

* The reference point when applying % units to an element
* Depends on the position property applied to this element
* Can be the closest ancestor or the viewport

![image](https://github.com/actionanand/css-uhost/assets/46064269/450f79fb-e906-46fd-b9bb-f796ba2e1f7a)

[🔼Back to the top](#contents)

## Responsive Website

![image](https://github.com/actionanand/css-uhost/assets/46064269/ed1e61bd-ad57-445d-b9e6-9211b5148994)

![image](https://github.com/actionanand/css-uhost/assets/46064269/6b9f5373-d29a-40a0-977d-05a5058227a7)

![image](https://github.com/actionanand/css-uhost/assets/46064269/2b9ebf94-0aba-420f-af92-65d10f5d4582)

[Screen Resolution Stats Worldwide - Statcounter GlobalStats](https://gs.statcounter.com/screen-resolution-stats#monthly-201801-202401-bar)

### About Viewport Meta-tag

* Should be added to your HTML files to adjust the viewport to device size
* Converts **hardware pixels** into **software pixels** and therefore takes into account the actual device width

1. [Setting the Viewport Meta Tag - Noble Desktop](https://www.nobledesktop.com/learn/html-css/setting-the-viewport-meta-tag)
2. [Responsive Meta Tag - CSS Tricks](https://css-tricks.com/snippets/html/responsive-meta-tag/)
3. [A Beginner’s Guide to Viewport Meta Tags - Semrush](https://www.semrush.com/blog/viewport-meta-tag/)

[🔼Back to the top](#contents)

## Styling Form

![image](https://github.com/actionanand/css-uhost/assets/46064269/bb83ab5d-2ce2-47e1-ba1d-d6bd01583519)

* [CSS `-webkit-appearance` - Quackit](https://www.quackit.com/css/properties/webkit/css_-webkit-appearance.cfm)
* [CSS appearance - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
* [Styling web forms - mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)
* [How do I style a `select dropdown` with only CSS? - StackOverflow](https://stackoverflow.com/questions/1895476/how-do-i-style-a-select-dropdown-with-only-css)

[🔼Back to the top](#contents)

## Custom Font

* [How To Load and Use Custom Fonts with CSS](https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css)
* [font-family - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
* [Web safe fonts](https://www.cssfontstack.com/)
* [The `line-height` property - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

### Font short-hand

```css
    font: italic small-caps 400 1.2rem/2 'Montserrat', sans-serif;
```
the order will be as below:

```css
font: font-style font-variant font-weight font-size/line-height font-family; 
```

* `font-size` and `font-family` should be there in the short-hand

![image](https://github.com/actionanand/css-uhost/assets/46064269/3a056466-7b0e-4b84-8e46-db0ef211f587)

![image](https://github.com/actionanand/css-uhost/assets/46064269/6803a4ef-74cc-4686-bf84-75e935522d9f)

|              | **Block Period**    | **Swap Period**     | **Outcome**                                                                                         |
|--------------|---------------------|---------------------|-----------------------------------------------------------------------------------------------------|
| **block**    | short               | infinite            | FOIT, Layout shifts                                                                                 |
| **swap**     | none                | infinite            | FOUT, Layout shifts                                                                                 |
| **fallback** | extremely short     | short               | Minimize the risk of layout shift & invisible texts                                                 |
| **optional** | extremely short     | none                | Minimize the risk of layout shift & invisible texts(even better than `fallback`, as no swap period) |
| **auto**     | based on user agent | based on user agent | based on user agent                                                                                 |


1. [Controlling Font Performance with font-display](https://developer.chrome.com/blog/font-display)
2. [Font loading strategies: FOIT and FOUT](https://dev.to/ibn_abubakre/font-loading-strategies-foit-and-fout-393b)
    - **FOIT** - Flash Of Invisible Text
    - **FOUT** - Flash Of Unstyled Text
3. [Optimize web fonts loading - YouTube](https://www.youtube.com/watch?v=wnpMeYARV4g)

![image](https://github.com/actionanand/css-uhost/assets/46064269/74c29804-e812-47ac-b5c8-17450bc1ca9a)

[🔼Back to the top](#contents)

## Flex Box

* Adding the `z-index`  to an element only has an effect, if the `position`  property with a value different from `static`  was applied to this element.
* One exception from this behaviour is **flexbox**. Applying the `z-index`  to `flex-items` (so the elements inside of the flex-container) will change the order of these items even if no position  property was applied.

![image](https://github.com/actionanand/css-uhost/assets/46064269/d3d2a89b-8fcd-4e0f-9fd8-1019b42bd092)

![image](https://github.com/actionanand/css-uhost/assets/46064269/a74def38-45f2-4272-97cc-ea4f4a1a9830)

![image](https://github.com/actionanand/css-uhost/assets/46064269/94fcbbda-ffff-48ec-a6d5-4d98a0d0cbc8)

```css
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-start;
    align-content: normal;
    /* short-hand for flex */
    /* 
      flex-flow: flex-direction flex-wrap;
    */
    flex-flow: row nowrap;
  }
```
* `flex-basis` is based on the **main axis**. If `flex-direction: row;`, `flex-basis` will be replaced the **width** of the element (X - axis). If `flex-direction: column;`, `flex-basis` will be replace the **height** of the element (Y - axis).

![image](https://github.com/actionanand/css-uhost/assets/46064269/537ba735-7595-4a4a-a807-c35f99cb26fa)

![image](https://github.com/actionanand/css-uhost/assets/46064269/9d87bd97-0daa-4843-b14a-0e6c9c37cee7)

[🔼Back to the top](#contents)

## CSS Grid

![image](https://github.com/actionanand/css-uhost/assets/46064269/1b4eff98-edcb-4379-8865-56261417efc9)

![image](https://github.com/actionanand/css-uhost/assets/46064269/ad588a70-27dc-436f-b869-78561ee607fd)

![image](https://github.com/actionanand/css-uhost/assets/46064269/aaf07043-831a-4582-b4a4-70da247df3b3)

![image](https://github.com/actionanand/css-uhost/assets/46064269/580f45b6-0438-4643-869e-ac1adaa15b42)

![image](https://github.com/actionanand/css-uhost/assets/46064269/79854f82-936b-459a-872f-22434218ad3a)

![image](https://github.com/actionanand/css-uhost/assets/46064269/c7bd6b0d-7b48-487c-a376-a1a4ae50caa7)


[🔼Back to the top](#contents)

## Transitions & Animations

* Simple animation

```css
  .modal {
    /* animation css - `ease-in` -> starts slower & ends faster; `ease-out` -> reverse of the prior */
    opacity: 0;
    transform: translateY(-3rem);
    transition: opacity 200ms, transform .5s;
  }

  .open {
    opacity: 1;
    transform: translateY(0);
  }
```

```css
/* transition: WHAT DURATION DELAY TIMING-FUNCTION; */
transition: opacity 200ms 1s ease-out;
```

The above line can be translated to: "Animate any changes in the `opacity`  property (for the element to which the `transition`  property is applied) over a duration of **200ms**. Start fast and end slow, also make sure to wait **1s** before you start".

1. [transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
2. [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
3. [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
4. [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
5. [MDN article on CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
6. [Easing Functions Cheat Sheet](https://easings.net/)

```css
/* animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE; */
animation: wiggle 200ms 1s ease-out 8 alternate forwards running;
```

```css
@keyframes wiggle {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(10deg);
  }
}
```

The above line Can be translated to: "Play the **wiggle keyframe** set (animation) over a duration of **200ms**. Between two keyframes **start fast and end slow**, also make sure to **wait 1s before you start**. Play **8 animations** and **alternate** after each animation. Once you're done, **keep the final value** applied to the element. Oh, and you should be **playing the animation - not pausing**."

1. [animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)
2. [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)
3. [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
4. [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)
5. [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
6. [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
7. [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)
8. [animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
9. [MDN article on CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

* [List of "transitionable" Properties](https://www.w3.org/TR/css-transitions-1/#animatable-properties)


[🔼Back to the top](#contents)

## Guide on Future proof css code

* [CSS Modules & Working Groups](https://www.w3.org/TR/#tr_Cascading_Style_Sheets__CSS__Working_Group)
* [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [Vendor Prefix- mdn](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)
* [Which Vendor Prefixes should you use?](https://shouldiprefix.com/)
* [@supports - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports)
* [BEM in detail](https://getbem.com/introduction/)
* [An introduction to Bootstrap 4 - Academind](https://academind.com/tutorials/bootstrap-4-tutorial)
* [CSS Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
* [Auto prefixer - online](https://autoprefixer.github.io/)

[🔼Back to the top](#contents)

# Sassy CSS

`SASS` -> Systematically Awesome Style Sheets
`SCSS` -> Sassy Cascading Style Sheets

### Nested Properties

SCSS code

```scss
  $full-width: 100%;

  .mobile-nav__items {
    width: 90%;
    height: $full-width;
    display: flex;
    flex: {
      direction: column;
      wrap: nowrap;
    }
  }
```

CSS Code

```css
  .mobile-nav__items {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
```

### Lists & Maps

SCSS Code

```scss
  $border-size: 1.5px;

  // map
  $color: (green-dark: #0e4f1f, red-bright: #ff1b68);

  // List
  $border-default: $border-size solid map-get($color, green-dark);


  .button {
    background: map-get($color, red-bright);
    color: white;
    font: inherit;
    border: $border-default;
    padding: .5rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
```

CSS Code

```css
  .button {
    background: #ff1b68;
    color: white;
    font: inherit;
    border: 1.5px solid #0e4f1f;
    padding: 0.5rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
```

### Built-in functions

```scss
  // SCSS
  .background {
    $dark-green: #0e4f1f;
    background: lighten($dark-green, 72%);
  }

  // CSS

  .background {
    background: #d5f8de;
  }
```

* [SCSS/SASS built-in functions - github](https://gist.github.com/AllThingsSmitty/3bcc79da563df756be46)
* [SASS built-in modules](https://sass-lang.com/documentation/modules/)

### Arithmetic operations in SASS/SCSS

SCSS

```scss
  $border-size: 1rem;

  .maths {
    border-radius:$border-size * 3;
  }
```

CSS

```css
  .maths {
    border-radius: 3rem;
  }
```

### Media query in SASS/SCSS

SCSS

```scss
  .container {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    @media (min-width: 40rem) {
      flex-direction: column;
      font-size: 10px;
    }
  }
```

CSS

```css
.container {
  display: flex;
  flex-direction: row;
  font-size: 15px;
}

@media (min-width: 40rem) {
	.container {
		flex-direction: column;
		font-size: 10px;
	}
}
```

### Inheritance in SCSS/SASS

SCSS

```scss
  $color: (green-dark: #0e4f1f, red-bright: #ff1b68);
  $border-size: 1.5px;

  .sass-section {
    font-family: 'Montserrat', sans-serif;
    border: $border-size solid map-get($color, green-dark);
    width: 50px;
  }

  .box1 {
    @extend .sass-section;
    height: 60px;
  }

  .box2 {
    @extend .sass-section;
    height: 70px;
  }
```

CSS

```css
  .sass-section, .box1, .box2 {
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #0e4f1f;
    width: 50px;
  }

  .box1 {
    height: 60px;
  }

  .box2 {
    height: 70px;
  }

  /* OR */

  .box1 {
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #0e4f1f;
    width: 50px;
    height: 60px;
  }
  .box2 {
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #0e4f1f;
    width: 50px;
    height: 70px;
  }
```

### Mixins

SCSS

```scss
  $dark-green: #0e4f1f;

  // mixin without arguments
  @mixin display-flex() {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .container {
    @include display-flex();
    flex-direction: column;
  }

  // mixin with arguments
  @mixin media-min-width($width) {
    @media (min-width: $width) {
      border: 2px solid green;
      @content;
    }
  }

  body {
    background: $dark-green;
    font-size: 15px;

    @include media-min-width(40rem) {
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
    }
  }
```

CSS

```css
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
  }

  body {
    background: #0e4f1f;
    font-size: 15px;
  }

  @media (min-width: 40rem) {
    body {
      border: 2px solid green;
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
    }
  }
```

1. [CSS `@import` Rule](https://www.w3schools.com/cssref/pr_import_rule.php)
2. [Using SASS partials](https://dev.to/sarah_chima/using-sass-partials-7mh)
3. [Sass @import and Partials](https://www.w3schools.com/sass/sass_import.php)

[🔼Back to the top](#contents)

## Resources for Vite

1. [Vite in a simple html+js use case](https://dev.to/marcinwosinek/vite-in-a-simple-html-js-usecase-35k2)
2. [Static Asset Handling - Vite official](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
3. [Shared Options - Vite official](https://vitejs.dev/config/shared-options)
4. [How to Convert a String to HTML using JavaScript](https://sabe.io/blog/javascript-convert-string-to-html)
5. [Append element as sibling after element? - Stackoverflow](https://stackoverflow.com/questions/21422337/append-element-as-sibling-after-element)

[🔼Back to the top](#contents)
