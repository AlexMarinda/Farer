# **Way-Farer**

[![Coverage Status](https://coveralls.io/repos/github/AlexMarinda/way-Farer/badge.svg?branch=develop)](https://coveralls.io/github/AlexMarinda/way-Farer?branch=develop) [![Build Status](https://travis-ci.com/AlexMarinda/way-Farer.svg?branch=develop)](https://travis-ci.com/AlexMarinda/way-Farer)

## **Project description**

WayFarer is a public bus transportation booking service.

## **UI Required features**

- [Sign up.](https://alexmarinda.github.io/way-Farer/UI/html/sign_up.html)
- [Sign in.](https://alexmarinda.github.io/way-Farer/UI/index.html)
- [Admin can create a trip.](https://alexmarinda.github.io/way-Farer/UI/html/create_trip.html)
- [Admin can cancel a trip.](https://alexmarinda.github.io/way-Farer/UI/html/create_trip.html)
- [View all trips.](https://alexmarinda.github.io/way-Farer/UI/html/view_all_trip.html)
- [View a specific trip.](https://alexmarinda.github.io/way-Farer/UI/html/specific_trip.html)
- [Book a seat on a trip.](https://alexmarinda.github.io/way-Farer/UI/html/booking.html)
- [View all bookings.](https://alexmarinda.github.io/way-Farer/UI/html/view_all_booking.html)
- [View all bookings by the user.](https://alexmarinda.github.io/way-Farer/UI/html/booking.html)
- [Delete a booking.](https://alexmarinda.github.io/way-Farer/UI/html/booking.html)

# **Optional features**

- [Filter trips based on origin.](https://alexmarinda.github.io/way-Farer/UI/html/filter_trip.html)
- [Filter trips based on destination.](https://alexmarinda.github.io/way-Farer/UI/html/filter_trip.html)
- [Specify a seat number when making a booking.](https://alexmarinda.github.io/way-Farer/UI/html/details.html)

# **Technonlogies**

- **Express JS** - API development framework

- **Node** - run time environment for JavaScript
- **Mocha and Chai** - for testing
- **Eslint** - code analysis tool for identifying problematic patterns found in JavaScript code
- **Babel JS** - JavaScript compiler (**ES6** to **ES5**)

# **Requirements and Installation steps**

## **You need the following to be able to run the application**

[Node](https://nodejs.org/en/download/) a runtime environment for JavaScript

[Postman](https://www.getpostman.com/downloads/) to test the Api endpoints

[Visual studio code](https://code.visualstudio.com/download) for editing and running the app

## **Clone the project**

    - git clone https://github.com/AlexMarinda/way-Farer.git
    - cd /Way-Farer
    - npm install (to install required dependencies)
    - npm run start (to start the development server)

## **Testing**

    - npm run test

## **API endpoints**

`- POST /auth/admin - To make user an admin` 

`- POST /auth/signin - User Signin` 

`- POST /auth/signup - User to create an account` 

`- POST /trips - Create a trip`

`- GET /trips/<:trip-id> - Get a specific trip`

`- GET /trips - Get all trips.`

`- PATCH /trips/<:trip-id>/cancel - Cancel a trip`

`- PATCH /trips/<:trip-id>/active - Active a trip`

`- GET /trips?origin=rwamagana -Filter trips based on origin.`

`- GET /trips?destination=kayonza -Filter trips based on destination.`

`- POST /bookings - Book a seat on a trip`

`- GET /bookings - View all bookings`

`- DELETE /bookings/<:booking-id> - Delete a booking`

## **Pivotal Tracker Stories**

[https://www.pivotaltracker.com/n/projects/2362545](https://www.pivotaltracker.com/n/projects/2362545)

## **UI Templates**

[https://alexmarinda.github.io/way-Farer/UI/](https://alexmarinda.github.io/way-Farer/UI/)

## **HEROKU WAY-FARER API **

[https://marinda-way-farer.herokuapp.com/](https://marinda-way-farer.herokuapp.com/)

## **API DICUMENTATON**

[https://marinda-way-farer.herokuapp.com/documentation/v1/](https://marinda-way-farer.herokuapp.com/documentation/v1/)

# **Author**

## **Marinda Alex**
