<script>
  setTimeout(function() {
console.log("green")
        if(document.querySelector("#following-frame")){
    	var cssLink = document.createElement("link");
		cssLink.href = "https://files.cargocollective.com/c1171819/iframe.css"; 
		cssLink.rel = "stylesheet"; 
		cssLink.type = "text/css"; 
		document.querySelector("#following-frame").contentDocument.body.innerHTML = document.querySelector("#following-frame").contentDocument.body.innerHTML + "<style>.bg-grey-dark{background:#3FB65B !important;}.color-white{color:black !important;}.ecommerce-cart [type=number]#quantity{color: black !important}polygon{fill: black !important;}g{stroke:black !important;opacity:1 !important;}.bg-blackest{background:transparent !important;}#slide-container .outline, #slide-container .outline select{outline: #000 1px solid;}#slide-container [data-remove].col-square.close-square svg{opacity:1;}.bs.container, .slide-panel.container{font-family: Diatype, sans-serif;}.type-bold{font-weight:normal;}.stripe-cc-element, form input{background:transparent;filter:invert(2);}#shipping_address form select,#shipping_address form select option{color:black !important;-webkit-text-fill-color: black !important;}label{background:transparent !important;}.color-grey-medium{color:black !important;}path{stroke-width:1px !important;}.type-size-big,.ecommerce-cart, [data-paymentframe]{font-size:13px !important;}</style>";
    }
  },500)
</script>