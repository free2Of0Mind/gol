module.exports = function(element){
  var el = element
  var l = parseFloat(getCSS(el, 'left'))
  var t = parseFloat(getCSS(el, 'top'))
  var r = parseFloat(getCSS(el, 'right'))
  var b = parseFloat(getCSS(el, 'bottom'))
  if(isNaN(l)){
    l = window.innerWidth - parseFloat(getCSS(el, 'right')) - parseFloat(getCSS(el, 'width'))
    if(isNaN(l)) l = 0
  }
  if(isNaN(t)){
    t = window.innerHeight - parseFloat(getCSS(el, 'bottom')) - parseFloat(getCSS(el, 'height'))
    if(isNaN(t)) t = 0
  }
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
