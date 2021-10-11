document.addEventListener("DOMContentLoaded", function() {
  let accordion = document.querySelectorAll(".accordion");

  for(let i = 0; i <= accordion.length - 1; i ++){
  	accordion[i].addEventListener("click", 			function(){

       if(accordion[i].classList.contains("on")){
         accordion[i].classList.remove("on");
       }else {
         accordion[i].classList.add("on");
       }
    })
  }
});