(function () {
  let accordionzz = document.querySelectorAll(".accordion > *:first-child");

  for(let i = 0; i <= accordionzz.length - 1; i ++){
  	accordionzz[i].addEventListener("click", 			function(){
      
       if(accordionzz[i].parentElement.classList.contains("on")){
         accordionzz[i].parentElement.classList.remove("on");
       }else {
         accordionzz[i].parentElement.classList.add("on");
       }

       let accordions = document.querySelectorAll(".accordion");
       for(let x = 0; x <= accordions.length - 1; x ++){
         if(accordions[x] != accordionzz[i].parentElement){
            accordions[x].classList.remove("on")
         }
          
       }
    })
  }
}());