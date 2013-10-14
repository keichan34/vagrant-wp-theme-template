###
navigation.js

Handles toggling the navigation menu for small screens.
###

container = undefined
button = undefined
menu = undefined
container = document.getElementById("site-navigation")
return  unless container
button = container.getElementsByTagName("h1")[0]
return  if "undefined" is typeof button
menu = container.getElementsByTagName("ul")[0]

# Hide menu toggle button if menu is empty and return early.
if "undefined" is typeof menu
  button.style.display = "none"
  return
menu.className += " nav-menu"  if -1 is menu.className.indexOf("nav-menu")
button.onclick = ->
  if -1 isnt container.className.indexOf("toggled")
    container.className = container.className.replace(" toggled", "")
  else
    container.className += " toggled"
