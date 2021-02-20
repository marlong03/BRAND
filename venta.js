var barra= document.getElementById("barra");
var burguer=document.getElementById("burguer");
burguer.addEventListener("click", touch_burguer);
function touch_burguer(){
   barra.classList.toggle("display-active");
   barra.classList.toggle("fadeInUp2");
   console.log(barra);
  
}
