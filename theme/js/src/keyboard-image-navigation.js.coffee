jQuery(document).ready ($) ->
  $(document).keydown (e) ->
    url = false
    if e.which is 37 # Left arrow key code
      url = $(".nav-previous a").attr("href")
    # Right arrow key code
    else url = $(".entry-attachment a").attr("href")  if e.which is 39
    window.location = url  if url and (not $("textarea, input").is(":focus"))
