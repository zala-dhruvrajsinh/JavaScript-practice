const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


document.addEventListener("click",function(b){
if(b.target.id=="grey"){
  body.style.backgroundColor="grey";}
  if (b.target.id=="white"){
    body.style.backgroundColor="white";}
     if (b.target.id=="blue"){
       body.style.backgroundColor="blue";}
       if(b.target.id=="yellow"){
        body.style.backgroundColor="yellow";
      }
})
;