(function () {
		let trigger1 = document.querySelector(".mobile-trigger");

		

			trigger1.addEventListener("click", function(){
				let modal = this.dataset.modal
				let cart = document.querySelector(".mobile-nav .right-links li:last-child");
				modal = document.getElementById(modal);
				if(modal.classList.contains("on")){
					modal.classList.remove("on");
					trigger1.innerHTML = "Menu"
					trigger1.classList.remove('close')
					cart.style.display = "inline-block";
					let allModals = document.querySelectorAll('.modal');
					for (var i = allModals.length - 1; i >= 0; i--) {
						if(allModals[i].classList.contains("on")){
							allModals[i].classList.remove("on")
						}
					}
				}else {
					let modalOpen = false
					let allModals = document.querySelectorAll('.modal');
					for (var i = allModals.length - 1; i >= 0; i--) {
						if(allModals[i].classList.contains("on")){
							allModals[i].classList.remove("on")
							trigger1.innerHTML = "Menu"
							trigger1.classList.remove('close')
							cart.style.display = "inline-block";
							modalOpen = true;
						}
					}
					if(!modalOpen){
						cart.style.display = "none";
						modal.classList.add("on");
						trigger1.classList.add('close')
						trigger1.innerHTML = "Close"
					}
					
				}
				
			})

		
	}());	
