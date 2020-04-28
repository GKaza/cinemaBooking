const seats = [];
const rows = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

for (let r = 0; r < 10; r += 1) {
    for (let x = 1; x < 21; x += 1) {
        let obj = {
            id : rows[r] + x,
            row : rows[r],
            number : x,
            available : true
        }
        seats.push(obj)
    }
}

console.log(seats)


//




function onLoaderFunc()
{
  $(".seatStructure *").prop("disabled", true);
  $(".displayerBoxes *").prop("disabled", true);
}
function takeData()
{
  if (( $("#Username").val().length == 0 ) || ( $("#Numseats").val().length == 0 ))
  {
  alert("Please Enter your Name and Number of Seats");
  }
  else
  {
    $(".inputForm *").prop("disabled", true);
    $(".seatStructure *").prop("disabled", false);
    document.getElementById("notification").innerHTML = "<b style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</b>";
  }
}


function updateTextArea() { 
    
  if ($("input:checked").length == ($("#Numseats").val()))
    {
      $(".seatStructure *").prop("disabled", true);
      
     var allNameVals = [];
     var allNumberVals = [];
     var allSeatsVals = [];
  
     //Storing in Array
     allNameVals.push($("#Username").val());
     allNumberVals.push($("#Numseats").val());
     $('#seatsBlock :checked').each(function() {
       allSeatsVals.push($(this).val());
     });
    
     //Displaying 
     $('#nameDisplay').val(allNameVals);
     $('#NumberDisplay').val(allNumberVals);
     $('#seatsDisplay').val(allSeatsVals);
    }
  else
    {
      alert("Please select " + ($("#Numseats").val()) + " seats")
    }
  }


function myFunction() {
  alert($("input:checked").length);
}

/*
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
*/


$(":checkbox").click(function() {
  let wantedSeats = $("#Numseats").val();
  let id = $(this).val();
  $(":checkbox").prop('disabled', true);
  let index = 0;
  
  for (let i = 0; i < array.length; i++) {
    const element = array[index];
    
  }


  // if ($("input:checked").length == ($("#Numseats").val())) {
  //   $(":checkbox").prop('disabled', true);
  //   $(':checked').prop('disabled', false);
  // }
  // else
  //   {
  //     $(":checkbox").prop('disabled', false);
  //   }
});



