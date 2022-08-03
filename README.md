# Client Management System App

## Overview

The client management system will use a client phone number to keep track of appointments and service history.

## Primary Objectives

<!-- TODO{efoe}: Where are deposits reflected? Is it just a checkbox? -->

As an administrator of the app:

- Whenever I login, I should see a list of all upcoming appointments that shows the time, client name, phone number and stylist.
- Whenever I click on cancel button, I should be able to cancel an appointment.

- Whenever I click an appointment, I should see the appointment service details.
- Whenever I click on a client, I should see a history of their previous services.

- Whenever I enter a phone number that doesn't exist, I should be prompted to create a new client or enter a different number.
- Whenever I choose to create a new client, I should see a form prompting for a mandatory name and an optional email.
- and then i should continue to the appointment form.
- Whenever I enter a phone number for an existing client, I should have the options to create an appointment or view their history/details.

- Whenever I start to create an appointment, I should be able to enter the type of service and the necessary number of hours.
  - then, i should be able to check a checkbox to indicate that the client has a deposit or not.
- Then, I should see a list of qualified stylists available for this time period.
- Then, I select a stylist to confirm the appointment.

- Whenever I create a new stylist, I should see a form to enter the stylist's name and some checkboxes/dropdown for their specialties.

- Whenever I click on "Stylists", I see a list of all of my stylists.
- Whenever I click on a stylist, I can edit their details, including specialties.
- Whenever I click on a stylist, I can set their schedule for the week.

- Whenever I click on clients then i should be able to see all the clients.

## Secondary Objectives

- Whenever I attempt to create an appointment outside of business hours, I am informed or blocked from making this appointment.

- Whenever I click on edit button, then I should be able to edit an appointment.
- Whenever I click on edit client then I should be able to edit a client information.

- Whenever I do a search, then I should be able to search for appointment by date or by phone number.

- Whenever I get a client inquiry for services, I can book an appointment based on the stylist's availability.

## Bonus Objective

<!-- TODO{efoe}: User story for keeping track of revenue. -->

- Whenever I enter a phone number for a client that has excessive cancellations, I will be alerted to collect a deposit.
- Whenever I click on cancellations, I should see a report of cancellations for the past month.
- whenever i want to calculate the total revenue of certain period of time.
- then i should click on get a report.
- then i should be prompted to enter a start and end date.
- then i should be able to see a report of the total revenue of certain period of time.

### Clients

```json
{
  "_id": "61b669edfee03a75e9d015d0",
  "client_name": "John Doe",
  "phone_number": "1234567890",
  "email": "john@mail.com",
  "appointments": [
    {
      "stylist_name": "Melanie",
      "appointment_date": "2018-01-01T00:00:00.000Z",
      "hours": 2,
      "price": "100",
      "service": "Senegalese",
      "deposit": "N",
      "created_date": "2018-01-01T00:00:00.000Z"
    }
  ]
}
```

### Stylists

```json
{
		"_id": "61b669edfee03a75e9d015d0",
		"name": "Melanie",
		"phone": "816-907-9526",
		"services": [
			"Senegalese",
			"Haircut"
		],
		"email": "melanie@email.com",
		"weekly_schedule": [
			{
				"day": "Monday",
				"start": "09:00",
				"end": "17:00"
			},
			{
				"day": "Tuesday",
				"start": "09:00",
				"end": "17:00"
			},
			{
				"day": "Wednesday",
				"start": "09:00",
				"end": "17:00"
			},
			{
				"day": "Thursday",
				"start": "09:00",
				"end": "17:00"
			},
			{
				"day": "Friday",
				"start": "09:00",
				"end": "17:00"
			}
		],
		"appointments": [
			{
				"client_name": "John Doe",
				"appointment_date": "2018-01-01T00:00:00.000Z",
				"hours": 2,
				"service": "Senegalese"
			}
		]
	},
```

## Routes

All routes will be prefaced with `/`.

All routes will be protected via JWT after authenticating a user.

### Master Routes

`POST` - `/login`

### appointment Routes

`/appointment`

`POST` - `/create`
`Put` - `/edit`
`POST` - `/details`
`POST` - `/find`
`POST` - `/findOne`
`POST` - `/cancel`

### Client Routes

`/client`

`POST` - `/create`
`POST` - `/find`
`POST` - `/findOne`
`PUT` - `/edit`
`POST` - `/details`

### Stylist

`/stylist`

`POST` - `/create`
`POST` - `/find`
`PUT` - `/edit`

## External APIs

TBD.
