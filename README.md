# cinema-booking

# 1. Seat Booking application

Develop the front end for a seat booking application for a cinema.

The seats should be displayed visually so users understand where they will be watching from when picking seats. We will call this the seat map.

The cinema room has 200 seats: 20 seats per row, 10 rows.

Each seat has its own unique id which is a letter and a number. The letters represent rows, the numbers is the seat number. For example, A1 is the first seat in the first row.


## Booking process

1. user enters the amount of seats they want to book
2. the user should be able to choose a seat by clicking the click a box on the seat map
3. the amount of seats (defined in 1.) should be selected/shown and including the selected seats in 2 as you see fit
4. user clicks Purchase Seats
    1. `V2`: user gets swal to confirm purchase. "Are you sure you want to book these seats?"
5. user is presented a receipt with the purchase, mentioning the booked seats. Here we ask them if they want to make another booking or just go.
    1. user clicks go → redirect user to netflix.com
    2. user clicks place another order → display the form again, starting from the step 1.

## Important Notes

- users cannot book seats that are already reserved
- user cannot click on a seat that is booked. Cursor should be disabled
- leave the design implementation for the end. We need to have the feature ASAP and we can launch it with bad design as soon as the process works properly.
- tasks marked with `V2` are meant to be implemented after the core functionallity
- the form data (user selected seats) should be available in the code in a variable that it is possible to send this payload to the server later:

```jsx
{
	ids: ['A1', 'A2', 'A3'],
  count: 3
}
```

## Design Implementation

`V3`: The app needs to be responsive. Mobile first using tailwind css. 

`V3`: For now let's use tailwind from a CDN. Instruction to install it here:

`V3`:  [https://v0.tailwindcss.com/docs/installation/#cdn](https://v0.tailwindcss.com/docs/installation/#cdn)

### Seats colors:

**Choose the colors you like. The shades should be:**

reserved → darkest

available → light

selected → green/active color

## Cases

### 1. user orders more seats than avaialble

show error mentioning the amount of available seats

### 2. user orders more seats than available in a row

this is an edge case we will handle later. For now just show the same error as in 1.

### 3. user clicks on a seat that is free but there is not enough space for their friends

`V1`: don't allow user to click this seat. treat it as reserved seats

`V2`: when clicking on a free seat and there are not enough seats around for their friends display a [swal](https://sweetalert.js.org/guides/) saying that it is not possible to fit them there and ask them to choose a seat elsewhere.

### 4. feel free to handle other cases as you see fit