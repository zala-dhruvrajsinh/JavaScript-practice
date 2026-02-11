const clock =document.querySelector("#clock");

setInterval(function(){
  let date = new Date() ;
  clock.innerHTML=date.toLocaleTimeString();
},500);

const day =document.querySelector("#day");

setInterval(function(){
  let days = new Date();
  console.log=days.getDay();
}),500;

setInterval(function () {
  let days = new Date();
  day.innerHTML = days.toString();
},500);
