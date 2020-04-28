const rows = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];
let seats = new Map();

for (let r = 0; r < 10; r += 1) {
    for (let x = 1; x < 21; x += 1) {
        let obj = {
            id : rows[r] + x,
            row : rows[r],
            number : x,
            available : true
        }
        seats.set(obj["id"], obj)
    }
}

console.log(seats)


//



function onLoaderFunc()
{
  $(".seatStructure *").prop("disabled", true);
  $(".displayerBoxes *").prop("disabled", true);
  $("#bookSeats").prop("disabled", true);
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


function bookSeats() { 
    
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


//


$(":checkbox").click(function() {
  $(":checked").prop('checked', false);
  let wantedSeats = parseInt($("#Numseats").val());
  let id = $(this).val();
  let row = seats.get(id).row
  let number = seats.get(id).number
  let firstSeat = number - (wantedSeats - 1);
  let allSeatsAvailable = false;
  let set = [];
  if (firstSeat < 1) {
    firstSeat = 1;
  }

  
  while (allSeatsAvailable == false && firstSeat <= number) {
    if (firstSeat + wantedSeats > 21) {
      break;
    }
    let setAvailable = true;
    for (let i = 0; i < wantedSeats; i += 1) {
      let seatId = row + (firstSeat + i);
      if (!seats.get(seatId).available) {
        setAvailable = false;
        break;
      } else {
        set[i] = seatId;
      }
    }
    allSeatsAvailable = setAvailable;
    firstSeat += 1;
  }

  if (allSeatsAvailable == true) {
  $("#bookSeats").prop("disabled", false);
    for (let i = 0; i < set.length; i += 1) {
      $( "input[value = " + set[i] + "]" ).prop( "checked", true );
    }
  }

  console.log(set)

});



