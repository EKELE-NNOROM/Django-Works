var headOne = document.querySelector("#One")

var headTwo = document.querySelector("#Two")

var headThree = document.querySelector("#Three")

headOne.addEventListener("mouseover",function(){
  headOne.textContent = "Mouse Currently Over",
  headOne.style.color = 'red';
})

headOne.addEventListener("mouseout",function(){
  headOne.textContent = "HOVER OVER ME",
  headOne.style.color = "black";
})

headTwo.addEventListener("mousedown",function(){
  headTwo.textContent = "MOUSE DOWN",
  headTwo.style.color = "blue";
})

headTwo.addEventListener("mouseup",function(){
  headTwo.textContent = "CLICK ME!",
  headTwo.style.color = "black";
})

headThree.addEventListener("dblclick",function(){
  headThree.textContent = "I WAS DOUBLE CLICKED",
  headThree.style.color = "green";
})
