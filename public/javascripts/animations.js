$("#animate").click(function (){
  let parent = $(this).parent().parent()
  document.getElementsByClassName("landing")[0].addEventListener("animationend", function(){
    parent.css("display", "none")
  })
  parent.addClass("animate")
  $(".navBarLogo").addClass("animate")
  $(".navBarMenu").addClass("animate")
})

$(".toggleMenu").click(function(){
  let menu = $(".menuWrap")
  if(menu.attr("data")=="true"){
    menu.removeClass("open")
    menu.attr("data", "false")
    return
  }
  menu.attr("data", "true")
  menu.addClass("open")
  
})