# cinema-booking
Basic functionality preview:

<a href="https://imgflip.com/gif/3z8ofr"><img src="https://i.imgflip.com/3z8ofr.gif"></a>


# Seat Booking application

The seats are displayed visually so users understand where they will be watching from when picking seats. We will call this the seat map.

The cinema room has 200 seats: 20 seats per row, 10 rows.

Each seat has its own unique id which is a letter and a number. The letters represent rows, the numbers is the seat number. For example, A1 is the first seat in the first row.


## Booking process

1. users enter their name and the amount of seats they want to book
2. the user should be able to choose a seat by clicking the click a box on the seat map
3. the amount of seats (defined in 1.) are selected/shown and include the selected seats in 2
4. user clicks Book Seats
    1. user gets swal confirming purchase
5. user is presented a receipt with the purchase, mentioning the booked seats. Here we ask them if they want to make another booking or just go
    1. user clicks go → redirect user to netflix.com
    2. user clicks place another order → display the form again, starting from the step 1.

## Important Notes

- users cannot book seats that are already reserved
- when clicking on a free seat and there are not enough seats around for their friends display a [swal](https://sweetalert.js.org/guides/) saying that it is not possible to fit them there and ask them to choose a seat elsewhere
- booked seats remain unavailable and are presented as such even after refreshing the page using localStorage for now

### Seats colors:

reserved → red

available → light grey

selected → green/active color
