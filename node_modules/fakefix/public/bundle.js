(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fakefix = require('./')

document.body.style.height = '2000px'
document.body.style.width = '2000px'
var button = document.createElement('button')
button.type = 'button'
button.style.position = 'absolute'
button.style.top = '100px'
button.style.left = '100px'
button.textContent = 'clickity click clack'
document.body.appendChild(button)
fakefix(button)

},{"./":2}],2:[function(require,module,exports){
module.exports = function(element){
  var el = element
  var l = parseFloat(getCSS(el, 'left'))
  var t = parseFloat(getCSS(el, 'top'))
  var t0 = false
  window.addEventListener('scroll', function(evt){
    if(t0) clearTimeout(t0)
    t0 = setTimeout(function(){
      var x = this.scrollX
      var y = this.scrollY
      el.style.top = t + y + 'px'
      el.style.left = l + x + 'px'
    }, 150)
  })
}

function getCSS(el, prop){
  return document.defaultView.getComputedStyle(el).getPropertyValue(prop)
} 

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3VzZXIvZmFrZWZpeC9lbnRyeS5qcyIsIi9ob21lL3VzZXIvZmFrZWZpeC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBmYWtlZml4ID0gcmVxdWlyZSgnLi8nKVxuXG5kb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcyMDAwcHgnXG5kb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJzIwMDBweCdcbnZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuYnV0dG9uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuYnV0dG9uLnN0eWxlLnRvcCA9ICcxMDBweCdcbmJ1dHRvbi5zdHlsZS5sZWZ0ID0gJzEwMHB4J1xuYnV0dG9uLnRleHRDb250ZW50ID0gJ2NsaWNraXR5IGNsaWNrIGNsYWNrJ1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidXR0b24pXG5mYWtlZml4KGJ1dHRvbilcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxlbWVudCl7XG4gIHZhciBlbCA9IGVsZW1lbnRcbiAgdmFyIGwgPSBwYXJzZUZsb2F0KGdldENTUyhlbCwgJ2xlZnQnKSlcbiAgdmFyIHQgPSBwYXJzZUZsb2F0KGdldENTUyhlbCwgJ3RvcCcpKVxuICB2YXIgdDAgPSBmYWxzZVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZXZ0KXtcbiAgICBpZih0MCkgY2xlYXJUaW1lb3V0KHQwKVxuICAgIHQwID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgdmFyIHggPSB0aGlzLnNjcm9sbFhcbiAgICAgIHZhciB5ID0gdGhpcy5zY3JvbGxZXG4gICAgICBlbC5zdHlsZS50b3AgPSB0ICsgeSArICdweCdcbiAgICAgIGVsLnN0eWxlLmxlZnQgPSBsICsgeCArICdweCdcbiAgICB9LCAxNTApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldENTUyhlbCwgcHJvcCl7XG4gIHJldHVybiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApXG59IFxuIl19
