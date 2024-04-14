page3=document.querySelector("#page3")
msg=document.querySelector("#msg")
close=document.querySelector("#close")
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

