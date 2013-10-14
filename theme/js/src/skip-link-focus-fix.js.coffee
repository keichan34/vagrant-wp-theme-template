is_webkit = navigator.userAgent.toLowerCase().indexOf("webkit") > -1
is_opera = navigator.userAgent.toLowerCase().indexOf("opera") > -1
is_ie = navigator.userAgent.toLowerCase().indexOf("msie") > -1
if (is_webkit or is_opera or is_ie) and "undefined" isnt typeof (document.getElementById)
  eventMethod = (if (window.addEventListener) then "addEventListener" else "attachEvent")
  window[eventMethod] "hashchange", (->
    element = document.getElementById(location.hash.substring(1))
    if element
      element.tabIndex = -1  unless /^(?:a|select|input|button|textarea)$/i.test(element.tagName)
      element.focus()
  ), false
