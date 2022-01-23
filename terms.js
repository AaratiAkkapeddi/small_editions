
(function () {

// footer-p
fetch('https://notion-api.splitbee.io/v1/page/e6b551efc4ee44019d04da5ca694cbd7')
  .then(response => response.json())
  .then(function(data){
  	let html = ""
  document.querySelectorAll("footer > p").forEach(e => e.remove());
  let p = document.createElement("p");

	let terms = document.querySelector("footer")
 
  	for (const property in data) {
  		if(data[property].value.parent_table == "block"){

      if(data[property].value.properties?.title[0]){

          if(data[property].value.type == "header"){
            html = html + "<h1>" + data[property].value.properties?.title[0]+ "</h1>"
          }else if(data[property].value.type == "text"){
            html = html + "<p>"
   
           for (let i = 0; i <= data[property].value.properties?.title.length - 1; i++) {

               if(data[property].value.properties?.title[i].length <= 1){
                  html = data[property].value.properties?.title[i];

               }
             
           }

            html = "<p>"+ html + "</p>"
          }
      }
  		}
	}
    console.log(html)
    p.innerHTML = html
    terms.prepend(p)
  });

// contact-modal
fetch('https://notion-api.splitbee.io/v1/page/9fc25003ba464a929beadab5c2945728')
  .then(response => response.json())
  .then(function(data){
  	let html = ""
	let terms = document.querySelector("#contact-modal .inner");
    console.log(data)
  	for (const property in data) {
  		if(data[property].value.parent_table == "block"){
  			if(data[property].value.properties?.title[0]){
      		if(data[property].value.type == "header"){
            html = html + "<h1>" + data[property].value.properties?.title[0]+ "</h1>"
          }else if(data[property].value.type == "text"){
            html = html + "<p>"
           for (let i = 0; i <= data[property].value.properties?.title.length - 1; i++) {
          
               if(data[property].value.properties?.title[i].length <= 1){
                  html = html + data[property].value.properties?.title[i];
               }else {
                   html = html + "<a href='"+ data[property].value.properties?.title[i][1][0][1] +"''>"+ data[property].value.properties?.title[i][0] +"</a>";
               }
             
           }

            html = html + "</p>"
          }
			}
  		}
	}
    terms.innerHTML = html
  });

// credits-modal
fetch('https://notion-api.splitbee.io/v1/page/905a1f7f26bc422b89c0431bb789b04f')
  .then(response => response.json())
  .then(function(data){
  	let html = ""
	let terms = document.querySelector("#credits-modal .inner");

  	for (const property in data) {
  		  if(data[property].value.parent_table == "block"){
        if(data[property].value.properties?.title[0]){
          if(data[property].value.type == "header"){
            html = html + "<h1>" + data[property].value.properties?.title[0]+ "</h1>"
          }else if(data[property].value.type == "text"){
            html = html + "<p>"
           for (let i = 0; i <= data[property].value.properties?.title.length - 1; i++) {
          
               if(data[property].value.properties?.title[i].length <= 1){
                  html = html + data[property].value.properties?.title[i];
               }else {
                   html = html + "<a href='"+ data[property].value.properties?.title[i][1][0][1] +"''>"+ data[property].value.properties?.title[i][0] +"</a>";
               }
             
           }

            html = html + "</p>"
          }
      }
      }
	   }
    terms.innerHTML = html
  });


// Faq-modal
fetch('https://notion-api.splitbee.io/v1/page/67bb6b6aecac4102a7e1694a06b7b413')
  .then(response => response.json())
  .then(function(data){
  	let html = ""
	let terms = document.querySelector("#faq-modal .inner");

  	for (const property in data) {
  		if(data[property].value.parent_table == "block"){
      if(data[property].value.properties?.title[0]){
          if(data[property].value.type == "header"){
            html = html + "<h1>" + data[property].value.properties?.title[0]+ "</h1>"
          }else if(data[property].value.type == "text"){
            html = html + "<p>"
           for (let i = 0; i <= data[property].value.properties?.title.length - 1; i++) {
          
               if(data[property].value.properties?.title[i].length <= 1){
                  html = html + data[property].value.properties?.title[i];
               }else {
                   html = html + "<a href='"+ data[property].value.properties?.title[i][1][0][1] +"''>"+ data[property].value.properties?.title[i][0] +"</a>";
               }
             
           }

            html = html + "</p>"
          }
      }
  		}
	}
    terms.innerHTML = html
  });


//terms

fetch('https://notion-api.splitbee.io/v1/page/f6cd86b1c1d041e283bbca32ddce0713')
  .then(response => response.json())
  .then(function(data){
  	let html = ""
	let terms = document.querySelector("#terms-modal .inner");

  	for (const property in data) {
  		if(data[property].value.parent_table == "block"){
      if(data[property].value.properties?.title[0]){
          if(data[property].value.type == "header"){
            html = html + "<h1>" + data[property].value.properties?.title[0]+ "</h1>"
          }else if(data[property].value.type == "text"){
            html = html + "<p>"
           for (let i = 0; i <= data[property].value.properties?.title.length - 1; i++) {
          
               if(data[property].value.properties?.title[i].length <= 1){
                  html = html + data[property].value.properties?.title[i];
               }else {
                   html = html + "<a href='"+ data[property].value.properties?.title[i][1][0][1] +"''>"+ data[property].value.properties?.title[i][0] +"</a>";
               }
             
           }

            html = html + "</p>"
          }
      }
  		}
	}
    terms.innerHTML = html
  });
}());
