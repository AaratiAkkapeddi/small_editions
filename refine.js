

//filter function
let currentBooks = [];

function searchString(el,books){
  html = el.innerHTML
  for (var i = books.length - 1; i >= 0; i--) {
    
    if(html.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").includes(books[i].toLowerCase())){
      return true
    }
  }
  
}
function processBooks(terms){
let arr = []
for (var i = terms.length - 1; i >= 0; i--) {
  arr.push(terms[i].books)
}
  if(arr.length == 1){
    return arr[0]
  }else if(arr.length == 2){
    return intersectTwo(arr[0], arr[1]);
  }else if(arr.length > 2){
    let result = intersectTwo(arr[0], arr[1]);
    for (var i = arr.length - 1; i >= 1; i--) {
      result = intersectTwo(result,arr[i]);

    }
  }else{
    return []
  }
}


 
let intersectTwo = (a, b) => {

    return a.filter((x) => {
        return b.some((y) => {
            return Object.is(x, y);
        });
    });
};
 



document.querySelector("#clear").addEventListener("click", function(){
 clearBooks()
})

function clearBooks(){

  let els = document.querySelectorAll('content.gallery .box');

  let lis = document.querySelectorAll('#side-nav li');
  for (let q = els.length - 1; q >= 0; q--) {
    els[q].classList.remove("off")
  }
  for (let j = lis.length - 1; j >= 0; j--) {
    lis[j].classList.remove("on")
  }
  currentBooks = [];
}

fetch('https://notion-api.splitbee.io/v1/table/467985ce41f14af4b5a691e7f8fa3b3f')
  .then(response => response.json())
  .then(function(data){
      let els = document.querySelectorAll('content.gallery .box');
      for (var j = data.length - 1; j >= 0; j--) {
        let filter = data[j].Filter
        let filterButton = document.querySelector("#"+filter);
        let books = data[j].Books

        console.log(books, filter)
        if(!books){
          books = [] 
        }
        
        filterButton.addEventListener("click", function(){
          if(this.classList.contains("on")){
              let inde = currentBooks.indexOf({"term": filter, "books": books});
              currentBooks.splice(inde,1);
              this.classList.remove("on");
              if(currentBooks.length < 1){
                clearBooks()
              }
            }else{
              this.classList.add("on")
              currentBooks.push({"term": filter, "books": books});
            
          
          let terms = processBooks(currentBooks)
          for (var x = els.length - 1; x >= 0; x--) {
            if(searchString(els[x],terms)){
              els[x].classList.remove("off")
            }else{
              els[x].classList.add("off")
            }
          }
          }
        })
      }

  });