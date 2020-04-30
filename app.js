const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let seats = new Map();
let set = [];
let reserved = JSON.parse(localStorage.getItem("reserved"));
let max = new Map();
let maxRow = 0;

// localStorage.removeItem("reserved")

for (let i = 0; i < rows.length; i += 1) {
  max.set(rows[i], 20);
}

for (let r = 0; r < 10; r += 1) {
  for (let x = 1; x < 21; x += 1) {
    let obj = {
      id: rows[r] + x,
      row: rows[r],
      number: x,
      available: true
    }

    seats.set(obj["id"], obj)
  }
}

if (reserved) {
  for (let i = 0; i < reserved.length; i += 1) {
    let sget = seats.get(reserved[i]);
    sget.available = false;
    max.set(sget.row, max.get(sget.row) - 1);
  }
} else {
  reserved = [];
}

for (let i = 0; i < rows.length; i++) {
  if (max.get(rows[i]) > maxRow) {
    maxRow = max.get(rows[i]);
  }
}

//


function onLoaderFunc() {
  $(".seatStructure *").prop("disabled", true);
  $(".displayerBoxes *").prop("disabled", true);
  $("#bookSeats").prop("disabled", true);
  seats.forEach(x => {
    if (x.available == false) {
      $("input[value = " + x.id + "]").addClass("reserved").prop("disabled", true);
    }
  });
  $(".displayerBoxes").hide();
  $(".endBtns").hide();
}

function takeData() {
  if (($("#Username").val().length == 0) || ($("#Numseats").val().length == 0) || (isNaN($("#Numseats").val()))) {
    swal("Cannot proceed!", "Please enter your name and the ammount of wanted seats.", "warning");
  } else if (($("#Numseats").val() > 20) || ($("#Numseats").val() < 1)) {
    swal("Cannot proceed!", "Ammount of wanted seats is unavailable.", "warning");
  } else if (($("#Numseats").val() > maxRow)) {
    swal("Cannot proceed!", "Number of seats is currently not available in a single row.", "warning");
  }
  else {
    $(".inputForm *").prop("disabled", true);
    $(".seatStructure *").prop("disabled", false);
    $("#bookSeats").addClass("btn")
    $("#notification").html("<b>Please Select your Seats</b>");
  }
}

function bookSeats() {
  if (set.length) {

    $(".seatStructure *").prop("disabled", true);


    for (let i = 0; i < set.length; i += 1) {
      seats.get(set[i]).available = false;
    }

    let setText = set.join(", ")
    //Display
    $('#nameDisplay').html($("#Username").val());
    $('#NumberDisplay').html($("#Numseats").val());
    $('#seatsDisplay').html(setText);

    $(".displayerBoxes").show();
    $(".endBtns").show();

    localStorage.setItem("reserved", JSON.stringify(reserved.concat(set)));
    swal("Successful Booking, " + $("#Username").val() + "!", "Your seats are " + set + ".", "success");
  } else {
    swal("Cannot proceed with the booking!", "Please pick your seat.", "error");
  }
}
//


$(":checkbox").click(function () {
  $(":checked").prop('checked', false);
  set = [];
  let wantedSeats = parseInt($("#Numseats").val());
  let id = $(this).val();
  let row = seats.get(id).row
  let number = seats.get(id).number
  let firstSeat = number - (wantedSeats - 1);
  let allSeatsAvailable = false;

  if (seats.get(id).available) {
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
        $("input[value = " + set[i] + "]").prop("checked", true);
      }
    }
  } else {
    swal("Seat already reserved!", "Make sure the seat you are trying to select is available.", "error");
  }
  console.log(set)
});



