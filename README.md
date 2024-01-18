# CSS Playground (css uHost)
This project focus on css.

Dev server: Point your browser at the below address!

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


****

## CSS Specificity

![image](https://github.com/actionanand/css-uhost/assets/46064269/aecee362-1955-48f3-9a27-e4a67fb9fa14)
![image](https://github.com/actionanand/css-uhost/assets/46064269/16d7cdb1-f389-4452-b188-0188dab4a106)
![image](https://github.com/actionanand/css-uhost/assets/46064269/73fe75ef-1b50-40f4-af07-ef5a1c9f4e5c)

* The universal selector * has no specificity value (0, 0, 0, 0);

## Combinators

![image](https://github.com/actionanand/css-uhost/assets/46064269/25296f30-4951-46d0-b204-9baa60b3d8f7)
![image](https://github.com/actionanand/css-uhost/assets/46064269/72e9cf15-ea73-4c16-97cf-f0f7ab82c48f)
![image](https://github.com/actionanand/css-uhost/assets/46064269/9e601b59-31d8-44b2-81f4-1b3d94a68028)
![image](https://github.com/actionanand/css-uhost/assets/46064269/212dd5c7-c72a-4a91-858a-8a89a2c77f6f)
![image](https://github.com/actionanand/css-uhost/assets/46064269/482409d1-2f9e-4613-ad48-dbb5553036dc)

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

## Background and Image

![image](https://github.com/actionanand/css-uhost/assets/46064269/c4c28015-896a-46b6-9545-c839b171c8d4)

1. [The background Property - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2. [Styling Images - w3 schools](https://www.w3schools.com/css/css3_images.asp)
3. [Filters - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
4. [Styling SVG - mdn](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)

![image](https://github.com/actionanand/css-uhost/assets/46064269/469d2ad5-6a72-482e-8427-9c28374aaeb9)

## Sizes & Units

* [Hiding Vertical & Horizontal Scrollbars with Pure CSS](https://web.archive.org/web/20180505112131/https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/)

Which will the `%` (percentage) value calculated with ref. to? The answer depends on the `position` property of the html element and the containing block (container), which the element takes as ref. for calculation of percentage.

![image](https://github.com/actionanand/css-uhost/assets/46064269/9369d41a-0852-4c94-83eb-3e8d26f46abd)

### The Containing Block

* The reference point when applying % units to an element
* Depends on the position property applied to this element
* Can be the closest ancestor or the viewport

![image](https://github.com/actionanand/css-uhost/assets/46064269/450f79fb-e906-46fd-b9bb-f796ba2e1f7a)

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

## Resources for Vite

1. [Vite in a simple html+js use case](https://dev.to/marcinwosinek/vite-in-a-simple-html-js-usecase-35k2)
2. [Static Asset Handling - Vite official](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
3. [Shared Options - Vite official](https://vitejs.dev/config/shared-options)
4. [How to Convert a String to HTML using JavaScript](https://sabe.io/blog/javascript-convert-string-to-html)
5. [Append element as sibling after element? - Stackoverflow](https://stackoverflow.com/questions/21422337/append-element-as-sibling-after-element)
