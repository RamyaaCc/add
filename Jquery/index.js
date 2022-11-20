$(document).ready(function () {
  $("button").click(function () {
    $(".test").hide();
    // $("*"---select all ele)
    //$(this---target button or particular fun)
    // $("#test").hide();--select id
    //$("p:first").hide(); --hide first para
    alert();
  });

  $("button").dblclick(function () {
    $("p").hide();
  });
});
//mouseenter mouseleave  mousedown  mouseup  hover()
// focus  blur on  hide(speed) show
//toggle --hide and show
// fadeIn  fadeOut  fadeToggle  fadeTo
//slideDown---$(selector).slideDown(speed,callback)
//slideUp                   slideToggle
//animate({},speed,callback)
//var div=$div-----to use multiple animation or action
//stop(stopAll,goToEnd)
// .set/ return text ----> .text()  .html()  .val()

//.attr()---attr("old","new") --set---to return---alert

// alert()--return or to set---$(selector).id(new)
//append()--insert at last
//prepend()--insert at first
//after() before()---insert at specified

/*selector.append(text)
selector.append(text)


selector.prepend(text)
selector.prepend(text)


remove()--selector.remove()---remove parrticular
empty()---selector.empty() ---remove entire



addClass
removeClass
toggleClass
css


width()
height()
innerHeight()
*/
