# Validation Station

An example repository for learning client side validation.

## Getting Started

1. Fork and clone this repository
1. `npm install`
1. `npm start`

## Task List

It is suggested you tackle each task in the given order.

- [x] Update the `<script>` tag so that we are able to correctly select the form. (could also do DOMContentLoaded event listener in JS)
- [x] Hijack the form so that the default action does not happen when you press the submit button.
- [x] Require both the **Kind** and **Brand** fields.
- [x] Limit the "Number of Seats" to be above 0.
- [x] If the user selects a "Passenger" or "Observation" car, require there to be a value in "Number of Seats".
- [x] If there is an error, surface those errors to the user.
- [x] If there is not an error, clear the values from the form and show a success message.
- [x] If there is not an error, add a new list item to the "Train Cars" column with information about the car.
