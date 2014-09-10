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
