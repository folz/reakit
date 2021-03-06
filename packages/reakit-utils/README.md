# reakit-utils

<a href="https://npmjs.org/package/reakit-utils"><img alt="NPM version" src="https://img.shields.io/npm/v/reakit-utils.svg" /></a>

> **This is experimental** and may have breaking changes in minor versions.

## Installation

npm:

```sh
npm i reakit-utils
```

Yarn:

```sh
yarn add reakit-utils
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [closest](#closest)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [createOnKeyDown](#createonkeydown)
    -   [Parameters](#parameters-1)
-   [cx](#cx)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples-1)
-   [getActiveElement](#getactiveelement)
    -   [Parameters](#parameters-3)
-   [getDocument](#getdocument)
    -   [Parameters](#parameters-4)
-   [hasFocusWithin](#hasfocuswithin)
    -   [Parameters](#parameters-5)
    -   [Examples](#examples-2)
-   [isButton](#isbutton)
    -   [Parameters](#parameters-6)
    -   [Examples](#examples-3)
-   [isEmpty](#isempty)
    -   [Parameters](#parameters-7)
    -   [Examples](#examples-4)
-   [isInteger](#isinteger)
    -   [Parameters](#parameters-8)
    -   [Examples](#examples-5)
-   [isObject](#isobject)
    -   [Parameters](#parameters-9)
-   [isPromise](#ispromise)
    -   [Parameters](#parameters-10)
-   [mergeRefs](#mergerefs)
    -   [Parameters](#parameters-11)
    -   [Examples](#examples-6)
-   [omit](#omit)
    -   [Parameters](#parameters-12)
    -   [Examples](#examples-7)
-   [pick](#pick)
    -   [Parameters](#parameters-13)
    -   [Examples](#examples-8)
-   [removeIndexFromArray](#removeindexfromarray)
    -   [Parameters](#parameters-14)
    -   [Examples](#examples-9)
-   [removeItemFromArray](#removeitemfromarray)
    -   [Parameters](#parameters-15)
    -   [Examples](#examples-10)
-   [splitProps](#splitprops)
    -   [Parameters](#parameters-16)
    -   [Examples](#examples-11)
-   [tabbable](#tabbable)
    -   [isFocusable](#isfocusable)
        -   [Parameters](#parameters-17)
        -   [Examples](#examples-12)
    -   [isTabbable](#istabbable)
        -   [Parameters](#parameters-18)
        -   [Examples](#examples-13)
    -   [getAllFocusableIn](#getallfocusablein)
        -   [Parameters](#parameters-19)
    -   [getFirstFocusableIn](#getfirstfocusablein)
        -   [Parameters](#parameters-20)
    -   [getAllTabbableIn](#getalltabbablein)
        -   [Parameters](#parameters-21)
    -   [getFirstTabbableIn](#getfirsttabbablein)
        -   [Parameters](#parameters-22)
    -   [getLastTabbableIn](#getlasttabbablein)
        -   [Parameters](#parameters-23)
    -   [getNextTabbableIn](#getnexttabbablein)
        -   [Parameters](#parameters-24)
    -   [getPreviousTabbableIn](#getprevioustabbablein)
        -   [Parameters](#parameters-25)
    -   [getClosestFocusable](#getclosestfocusable)
        -   [Parameters](#parameters-26)
    -   [ensureFocus](#ensurefocus)
        -   [Parameters](#parameters-27)
        -   [Examples](#examples-14)
-   [toArray](#toarray)
    -   [Parameters](#parameters-28)
    -   [Examples](#examples-15)
-   [types](#types)
    -   [Omit](#omit-1)
    -   [RenderProp](#renderprop)
    -   [As](#as)
    -   [ElementType](#elementtype)
    -   [HTMLAttributesWithRef](#htmlattributeswithref)
    -   [ExtractHTMLAttributes](#extracthtmlattributes)
    -   [UnionToIntersection](#uniontointersection)
    -   [PickByValue](#pickbyvalue)
    -   [PropsWithAs](#propswithas)
    -   [ArrayValue](#arrayvalue)
    -   [AnyFunction](#anyfunction)
-   [useAllCallbacks](#useallcallbacks)
    -   [Parameters](#parameters-29)
    -   [Examples](#examples-16)
-   [useIsomorphicEffect](#useisomorphiceffect)
-   [useLiveRef](#useliveref)
    -   [Parameters](#parameters-30)
-   [usePipe](#usepipe)
    -   [Parameters](#parameters-31)
-   [useSealedState](#usesealedstate)
    -   [Parameters](#parameters-32)
-   [useUpdateEffect](#useupdateeffect)
    -   [Parameters](#parameters-33)
-   [warning](#warning)
    -   [Parameters](#parameters-34)
    -   [Examples](#examples-17)

### closest

Ponyfill for `Element.prototype.closest`

#### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `selectors` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### Examples

```javascript
import { closest } from "reakit-utils";

closest(document.getElementById("id"), "div");
// same as
document.getElementById("id").closest("div");
```

### createOnKeyDown

Returns an `onKeyDown` handler to be passed to a component.

#### Parameters

-   `options` **Options**  (optional, default `{}`)
    -   `options.keyMap`  
    -   `options.onKey`  
    -   `options.stopPropagation`  
    -   `options.onKeyDown`  
    -   `options.shouldKeyDown`   (optional, default `()=>true`)
    -   `options.preventDefault`   (optional, default `true`)

Returns **React.KeyboardEventHandler** 

### cx

Returns a string with truthy class names separated by space.

#### Parameters

-   `classes` **...[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined) | null | `false`)>** 

#### Examples

```javascript
import { cx } from "reakit-utils";

const className = cx("a", "b", false, true && "c");
```

Returns **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

### getActiveElement

Returns `element.ownerDocument.activeElement`.

#### Parameters

-   `element` **([Element](https://developer.mozilla.org/docs/Web/API/Element) \| [Document](https://developer.mozilla.org/docs/Web/API/Document) | null)?** 

### getDocument

Returns `element.ownerDocument || window.document`.

#### Parameters

-   `element` **([Element](https://developer.mozilla.org/docs/Web/API/Element) \| [Document](https://developer.mozilla.org/docs/Web/API/Document) | null)?** 

Returns **[Document](https://developer.mozilla.org/docs/Web/API/Document)** 

### hasFocusWithin

Checks if `element` has focus.

#### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

#### Examples

```javascript
import { hasFocusWithin } from "reakit-utils";

hasFocusWithin(document.getElementById("id"));
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isButton

Checks whether `element` is a native HTML button element or not.

#### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

#### Examples

```javascript
import { isButton } from "reakit-utils";

isButton(document.querySelector("button")); // true
isButton(document.querySelector("input[type='button']")); // true
isButton(document.querySelector("div")); // false
isButton(document.querySelector("input[type='text']")); // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isEmpty

Checks whether `arg` is empty or not.

#### Parameters

-   `arg` **any** 

#### Examples

```javascript
import { isEmpty } from "reakit-utils";

isEmpty([]); // true
isEmpty(["a"]); // false
isEmpty({}); // true
isEmpty({ a: "a" }); // false
isEmpty(); // true
isEmpty(null); // true
isEmpty(undefined); // true
isEmpty(""); // true
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isInteger

Checks whether `arg` is an integer or not.

#### Parameters

-   `arg` **any** 

#### Examples

```javascript
import { isInteger } from "reakit-utils";

isInteger(1); // true
isInteger(1.5); // false
isInteger("1"); // true
isInteger("1.5"); // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isObject

Checks whether `arg` is an object or not.

#### Parameters

-   `arg` **any** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isPromise

Checks whether `arg` is a promise or not.

#### Parameters

-   `arg` **(T | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;T>)** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### mergeRefs

Merges multiple React ref props into a single value that can be passed to
a component.

#### Parameters

-   `refs` **...[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;(React.Ref&lt;any> | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>** 

#### Examples

```javascript
import React from "react";
import { mergeRefs } from "reakit-utils";

const Component = React.forwardRef((props, ref) => {
  const internalRef = React.useRef();
  return <div ref={mergeRefs(internalRef, ref)} {...props} />;
});
```

Returns **(React.Ref&lt;any> | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

### omit

Omits specific keys from an object.

#### Parameters

-   `object` **T** 
-   `paths` **(ReadonlyArray&lt;K> | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;K>)** 

#### Examples

```javascript
import { omit } from "reakit-utils";

omit({ a: "a", b: "b" }, ["a"]); // { b: "b" }
```

Returns **Omit&lt;T, K>** 

### pick

Picks specific keys from an object.

#### Parameters

-   `object` **T** 
-   `paths` **(ReadonlyArray&lt;K> | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;K>)** 

#### Examples

```javascript
import { pick } from "reakit-utils";

pick({ a: "a", b: "b" }, ["a"]); // { a: "a" }
```

### removeIndexFromArray

Immutably removes an index from an array.

#### Parameters

-   `array` **A** 
-   `idx` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### Examples

```javascript
import { removeIndexFromArray } from "reakit-utils";

removeIndexFromArray(["a", "b", "c"], 1); // ["a", "c"]
```

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** A new array without the item in the passed index.

### removeItemFromArray

Immutably removes an item from an array.

#### Parameters

-   `array` **A** 
-   `item` **any** 

#### Examples

```javascript
import { removeItemFromArray } from "reakit-utils";

removeItemFromArray(["a", "b", "c"], "b"); // ["a", "c"]

// This only works by reference
const obj = {};
removeItemFromArray([obj], {}); // [obj]
removeItemFromArray([obj], obj); // []
```

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** A new array without the passed item.

### splitProps

Splits an object (`props`) into a tuple where the first item is an object
with the passed `keys`, and the second item is an object with these keys
omitted.

#### Parameters

-   `props` **T** 
-   `keys` **(ReadonlyArray&lt;K> | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;K>)** 

#### Examples

```javascript
import { splitProps } from "reakit-utils";

splitProps({ a: "a", b: "b" }, ["a"]); // [{ a: "a" }, { b: "b" }]
```

Returns **\[any, Omit&lt;T, K>]** 

### tabbable

#### isFocusable

Checks whether `element` is focusable or not.

##### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

##### Examples

```javascript
import { isFocusable } from "reakit-utils";

isFocusable(document.querySelector("input")); // true
isFocusable(document.querySelector("input[tabindex='-1']")); // true
isFocusable(document.querySelector("input[hidden]")); // false
isFocusable(document.querySelector("input:disabled")); // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

#### isTabbable

Checks whether `element` is tabbable or not.

##### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

##### Examples

```javascript
import { isTabbable } from "reakit-utils";

isTabbable(document.querySelector("input")); // true
isTabbable(document.querySelector("input[tabindex='-1']")); // false
isTabbable(document.querySelector("input[hidden]")); // false
isTabbable(document.querySelector("input:disabled")); // false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

#### getAllFocusableIn

Returns all the focusable elements in `container`.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Element](https://developer.mozilla.org/docs/Web/API/Element)>** 

#### getFirstFocusableIn

Returns the first focusable element in `container`.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **([Element](https://developer.mozilla.org/docs/Web/API/Element) | null)** 

#### getAllTabbableIn

Returns all the tabbable elements in `container`, including the container
itself.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `fallbackToFocusable` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If `true`, it'll return focusable elements if there are no tabbable ones.

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Element](https://developer.mozilla.org/docs/Web/API/Element)>** 

#### getFirstTabbableIn

Returns the first tabbable element in `container`, including the container
itself if it's tabbable.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `fallbackToFocusable` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If `true`, it'll return the first focusable element if there are no tabbable ones.

Returns **([Element](https://developer.mozilla.org/docs/Web/API/Element) | null)** 

#### getLastTabbableIn

Returns the last tabbable element in `container`, including the container
itself if it's tabbable.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `fallbackToFocusable` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If `true`, it'll return the last focusable element if there are no tabbable ones.

Returns **([Element](https://developer.mozilla.org/docs/Web/API/Element) | null)** 

#### getNextTabbableIn

Returns the next tabbable element in `container`.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `fallbackToFocusable` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If `true`, it'll return the next focusable element if there are no tabbable ones.

Returns **([Element](https://developer.mozilla.org/docs/Web/API/Element) | null)** 

#### getPreviousTabbableIn

Returns the previous tabbable element in `container`.

##### Parameters

-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `fallbackToFocusable` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If `true`, it'll return the previous focusable element if there are no tabbable ones.

Returns **([Element](https://developer.mozilla.org/docs/Web/API/Element) | null)** 

#### getClosestFocusable

Returns the closest focusable parent of `element`.

##### Parameters

-   `element` **T** 
-   `container` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **([Element](https://developer.mozilla.org/docs/Web/API/Element) | null)** 

#### ensureFocus

Ensures `element` will receive focus if it's not already.

##### Parameters

-   `element` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** 
-   `$1` **EnsureFocusOptions**  (optional, default `{}`)
    -   `$1.isActive`   (optional, default `defaultIsActive`)
    -   `$1.preventScroll`  

##### Examples

```javascript
import { ensureFocus } from "reakit-utils";

ensureFocus(document.activeElement); // does nothing

const element = document.querySelector("input");

ensureFocus(element); // focuses element
ensureFocus(element, { preventScroll: true }); // focuses element preventing scroll jump

function isActive(el) {
  return el.dataset.active === "true";
}

ensureFocus(document.querySelector("[data-active='true']"), { isActive }); // does nothing
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** `requestAnimationFrame` call ID so it can be passed to `cancelAnimationFrame` if needed.

### toArray

Transforms `arg` into an array if it's not already.

#### Parameters

-   `arg` **any** 

#### Examples

```javascript
import { toArray } from "reakit-utils";

toArray("a"); // ["a"]
toArray(["a"]); // ["a"]
```

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any>** 

### types

#### Omit

Type: Pick&lt;T, Exclude&lt;any, K>>

#### RenderProp

Render prop type

Type: function (props: P): React.ReactElement&lt;any>

#### As

"as" prop

Type: React.ReactType&lt;P>

#### ElementType

Converts T to its element type

```ts
type HTMLDivElement = ElementType<"div">;
type FunctionalComponent = ElementType<() => null>;
type Never = ElementType<"foo">;
```

Type: any

#### HTMLAttributesWithRef

Type: any

#### ExtractHTMLAttributes

Returns only the HTML attributes inside P

```ts
type OnlyId = ExtractHTMLAttributes<{ id: string; foo: string }>;
type HTMLAttributes = ExtractHTMLAttributes<any>;
```

Type: Pick&lt;HTMLAttributesWithRef, Extract&lt;any, any>>

#### UnionToIntersection

Transforms `"a" | "b"` into `"a" & "b"`

Type: any

#### PickByValue

Same as Pick, but with value types instead of key

Type: Pick&lt;T, any>

#### PropsWithAs

Generic component props with "as" prop

Type: any

#### ArrayValue

Returns the type of the items in an array

Type: any

#### AnyFunction

Any function

Type: function (...args: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any>): any

### useAllCallbacks

React custom hook that combines multiple callbacks into one.

#### Parameters

-   `callbacks` **...[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;(AnyFunction | null | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>** 

#### Examples

```javascript
import React from "react";
import { useAllCallbacks } from "reakit-utils";

function Component(props) {
  const onClick = () => {};
  return (
    <button onClick={useAllCallbacks(onClick, props.onClick)}>Button</button>
  );
}
```

Returns **AnyFunction** 

### useIsomorphicEffect

`React.useLayoutEffect` that fallbacks to `React.useEffect` on server side
rendering.

### useLiveRef

A `React.Ref` that keeps track of the passed `value`.

#### Parameters

-   `value` **T** 

Returns **React.MutableRefObject&lt;T>** 

### usePipe

A React custom hook similar to [`useAllCallbacks`](#useallcallbacks), but
it'll pass the returned value from a function to the next function.

#### Parameters

-   `fns` **...[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;(AnyFunction | null | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))>** 

### useSealedState

React custom hook that returns the very first value passed to `initialState`,
even if it changes between re-renders.

#### Parameters

-   `initialState` **SealedInitialState&lt;T>** 

### useUpdateEffect

A `React.useEffect` that will not run on the first render.

#### Parameters

-   `effect` **React.EffectCallback** 
-   `deps` **(ReadonlyArray&lt;any> | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))?** 

### warning

Logs `messages` to the console using `console.warn` based on a `condition`.

#### Parameters

-   `condition` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
-   `messages` **...[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** 

#### Examples

```javascript
import { warning } from "reakit-utils";

warning(true, "a", "b"); // console.warn("a\nb")
warning(false, "a", "b"); // does nothing
```

## License

MIT © [Diego Haz](https://github.com/diegohaz)
