document.addEventListener("DOMContentLoaded", function() {
		let trigger = document.querySelectorAll(".mobile-trigger");
		
		for(let i = 0; i < trigger.length; i ++){
			trigger[i].addEventListener("click", function(){
				let modal = this.dataset.modal
				let cart = document.querySelector(".mobile-nav .right-links li:last-child");
				modal = document.getElementById(modal);
				if(modal.classList.contains("on")){
					modal.classList.remove("on");
					trigger[i].innerHTML = "Menu"
					trigger[i].classList.remove('close')
					cart.style.display = "inline-block";
				}else {
					let modalOpen = false
					let allModals = document.querySelectorAll('.modal');
					for (var i = allModals.length - 1; i >= 0; i--) {
						if(allModals[i].classList.contains("on")){
							allModals[i].classList.remove("on")
							trigger[i].innerHTML = "Menu"
							trigger[i].classList.remove('close')
							cart.style.display = "inline-block";
							modalOpen = true;
						}
					}
					if(!modalOpen){
						cart.style.display = "none";
						modal.classList.add("on");
						trigger[i].classList.add('close')
						trigger[i].innerHTML = "Close"
					}
					
				}
				
			})
		}
		
		
})