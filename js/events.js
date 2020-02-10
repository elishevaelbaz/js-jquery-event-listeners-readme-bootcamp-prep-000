//define functions here

function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  })
}

function frameIt(){
  $()
}

function pressIt(){
   $("p").on("keydown", function(key){
    if(key.which === 71){
      alert("G was pressed")
    }
  })
}

function submitIt(){
  
}


$(document).ready(function(){

// call functions here

  getIt()
});
