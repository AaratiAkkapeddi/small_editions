document.addEventListener("DOMContentLoaded", function() {
	const scriptURL = "https://script.google.com/macros/s/AKfycbyGiO7mHHzVn9fJNX6qTR28onDCzJuA-rOA4gf9-J8UBPnUSE5_GIt-qrwj6eyJBpYQ/exec";
	const form = document.forms["submit-to-google-sheet"];
	
	form.addEventListener("submit", e => {
	  e.preventDefault();
	  document.getElementById("answer").classList.add("done");
	
	  document.getElementById("done-message").classList.add("show");
	  fetch(scriptURL, { method: "POST", body: new FormData(form) })
	    .then(response => console.log("Success!", response))
	    .catch(error => console.error("Error!", error.message));
	});

})
