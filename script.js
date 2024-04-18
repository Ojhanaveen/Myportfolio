page3=document.querySelector("#page3")
msg=document.querySelector("#msg")
close=document.querySelector("#close")
menu_icon=document.querySelector("#menu_icon")
cross_icon=document.querySelector("#cross_icon")
pagenav=document.querySelector("#pagenav")
msg.addEventListener("click",function(){
    page3.style.left="0"
    close.style.opacity="1"
    msg.style.opacity="0"
   
})
close.addEventListener("click",function(){
    page3.style.left="-100%"
    close.style.opacity="0"
    msg.style.opacity="1"
   
})

menu_icon.addEventListener("click",function(){
    pagenav.style.left="0"
    cross_icon.style.display="block"
    menu_icon.style.display="none"
   
})
cross_icon.addEventListener("click",function(){
    pagenav.style.left="-55%"
    cross_icon.style.display="none"
    menu_icon.style.display="block"
   
})




