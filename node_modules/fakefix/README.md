# fakefix

Call fakefix on an HTMLElement that is absolutely position, when you want it to be fixed.  I have my reasons, maybe you have yours.  My reason is that I use absolute positioning all the time, but I ran into a case using document.elementFromPoint, which does not work on fixed elements.  

With fakefix, your element will be restored to a relative fixed like absolute position.  

## usage

```
npm install fakefix
```

```js
var fakefix = require('fakefix')
fakefix(myAbsolutePositionedElement)
```

## example
```
npm install -g st // or ecstatic
$clone this repo
st || ecstatic
```
open web browser
scroll
