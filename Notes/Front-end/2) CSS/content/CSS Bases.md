# CSS

## What is CSS?

CSS is the language we use to style an HTML document.
CSS stands for Cascading Style Sheets.
CSS describes how HTML elements should be displayed.


CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

## CSS syntax

CSS is rule-based — you define rules specifying groups of styles that should be applied to particular elements.

**Rules** in CSS are made up of **selectors**, **declarations**, **properties**, and the **property's value**.

### Selectors

We can divide CSS selectors into five categories:

- **Simple selectors**: select elements based on name, id or class.
- **Attribute selectors**: select elements based on the presence of a certain attribute on an element.
- **Pseudo-classes**: style certain states of an element.
- **Pseudo-elements**: select a certain part of an element rather than the element itself.
- **Combinators**: combine other selectors in order to target elements.

### Properties

There are many properties with different values, witch going to stylise a HTML element in different ways.

All HTML element can be styled since every element can be selected. 

Some elements have unique properties.

## Specificity

Specificity is the means by which browsers decide which CSS rules will be applied.

Specificity only applies when the same element is targeted by multiple declarations.


- Inline style has highest priority. 
- ID have the second highest priority.
- Classes, pseudo-classes and attributes are come next.  
- Elements and pseudo-elements have lowest priority. 

