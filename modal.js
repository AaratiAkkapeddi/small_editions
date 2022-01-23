(function () {
		let trigger = document.querySelectorAll(".modal-trigger");
		
		for(let i = 0; i < trigger.length; i ++){
			trigger[i].addEventListener("click", function(){

				let menu = document.querySelector(".mobile-trigger");
				let modal = this.dataset.modal
				let cart = document.querySelector(".mobile-nav .right-links li:last-child");
				cart.style.display = "none";
				modal = document.getElementById(modal);
				modal.classList.add("on");
				menu.classList.add('close')
				menu.innerHTML = "Close"
			})
		}
		
		let close = document.querySelectorAll(".close-modal");
		
		for(let i = 0; i < close.length; i ++){
			close[i].addEventListener("click", function(){
				let menu = document.querySelector(".mobile-trigger");
				let cart = document.querySelector(".mobile-nav .right-links li:last-child");
				cart.style.display = "inline-block";
				let modal = this.dataset.modal
				modal = document.getElementById(modal);
				modal.classList.remove("on");
				menu.innerHTML = "Menu"
				menu.classList.remove('close')
			})
		}
}());