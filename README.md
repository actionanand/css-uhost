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
3. [Box Model & Positioning elements in css](#box-model--positioning-elements-in-css)
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

## Box Model & Positioning elements in css

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

## Resources for Vite

1. [Vite in a simple html+js use case](https://dev.to/marcinwosinek/vite-in-a-simple-html-js-usecase-35k2)
2. [Static Asset Handling - Vite official](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
3. [Shared Options - Vite official](https://vitejs.dev/config/shared-options)
4. [How to Convert a String to HTML using JavaScript](https://sabe.io/blog/javascript-convert-string-to-html)
