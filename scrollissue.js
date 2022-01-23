
(function () {

	document.addEventListener('scroll', function(e) {
	  lastKnownScrollPosition = window.scrollY;
	  if(document.getElementById("back-to-top") && document.querySelector(".box:last-child") && document.getElementById("side-nav")){
	   let footerpos = document.querySelector("footer").offsetTop
	   let position = document.querySelector("footer").getBoundingClientRect();
	   let btp = document.getElementById("back-to-top").getBoundingClientRect();
	   let box = document.querySelector(".box:last-child").getBoundingClientRect();
		// checking whether footer visible
	   if(btp.top <= (window.innerHeight + 50)){
	   		document.getElementById("side-nav").style.position = "absolute"
	   		document.getElementById("side-nav").style.bottom ="calc(20em + "+ (25 + parseFloat(position.height)) +"px)"
	    } else{
			document.getElementById("side-nav").style.position = "fixed"
	      	document.getElementById("side-nav").style.bottom ="auto"
		}
	  }
	});
}());	