//при написинаии было использовано все кроме мозга :з
var form = document.querySelector('.validate_form');
var R = document.querySelector('.r');
//var r_only = document.querySelector('.onlyR'); 
var y = document.querySelector('.y');
var all_x = document.querySelector('.selectedX');

function isEmpty(val){
	return val.value.length == 0;
}

$(document).ready(function(){

  $("#info").on("submit", function(event){
    event.preventDefault();
    processX();
    if((isEmpty(all_x) || isEmpty(y)) || isEmpty(R)){
      alert("x or y or R is empty!");
      return;
    }
    console.log("Recived values:");
    console.log('x:', all_x.value);
    console.log('y:', y.value);
    console.log('r:', R.value);

    console.log($(this).serialize());

    $.ajax({
        url: 'controller',
        method: "GET",
        data: $(this).serialize() + "&timezone=" + new Date().getTimezoneOffset(),
        dataType: "html",

          success: function(msg){
            console.log("Data recived");
            console.log(msg);
            $("#results").html(msg); 
          },
          error: function(error){
            console.log("Data recive error");
            console.log(error);
          $(".validate_button").attr("disabled", false);	
        },
    }) 
  });
});

$(".reset_button").on("click",function(){
  $.ajax({
    url: 'control',
    method: "POST",
    dataType: "html",
    success: function(data){
      console.log(data);
      $("#result_table>tbody").html(data);
    },
    error: function(error){
      console.log(error);	
    },
  })
})

// function check_R(){
//   if(all_x.value.length == 0 && y.value.length == 0)
//     r_only.value = true;
//   else if(all_x.value.length != 0 && y.value.length != 0)
//     r_only.value = false;
// }

function processX(){
  let x_forCheck = document.querySelectorAll('.x');
  var x_checked = [];
  for(let i = 0; i<x_forCheck.length;i++){
    if(x_forCheck[i].checked)
      x_checked.push(x_forCheck[i].value);
  }
  all_x.value = x_checked.join("*");
}











