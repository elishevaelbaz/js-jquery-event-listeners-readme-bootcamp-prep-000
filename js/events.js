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
  $(ow."form").on("submit", function(){
    alert("Your form is going to be submitted n")
  })
}


$(document).ready(function(){

// call functions here

  getIt()
  frameIt()
  pressIt()
  submitIt()
});
