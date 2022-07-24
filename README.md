# Client Management System App

## Overview

The client management system will use a client phone number to keep track of appointments and service history.

## Primary Objectives

As an administrator of the app:

- Whenever I login, I should see a list of all upcoming appointments that shows the time, client name, phone number and stylist.
- Whenever i click on cancel button, I should be able to cancel an appointment.

- Whenever I click an appointment, I should see the appointment service details.
- Whenever I click on a client, I should see a history of their previous services.

- Whenever I enter a phone number that doesn't exist, I should be prompted to create a new client or enter a different number.
- Whenever I choose to create a new client, I should see a form prompting for a mandatory name and an optional email.
- Whenever I enter a phone number for an existing client, I should have the options to create an appointment or view their history/details.

- Whenever I create an appointment, I should be able to enter the type of service and the necessary number of hours.

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

## Bonus Objective

- Whenever I enter a phone number for a client that has excessive cancellations, I will be alerted to collect a deposit.
- Whenever I click on cancellations, I should see a report of

## Some of What's Included

- Keep track of clients and appointments
- manage clients.
- manage appointments.

### Client

```json
{
		"_id": "61b669edfee03a75e9d015d0",
		"name": "Elizabeth",
		"phone": "816-907-9526",
		"createdAt": "2017-01-01T00:00:00.000Z",
		"serviceHistory":[
			{
				"_id": "61b669edfee03a75e9d015d1",
				"appointmentDate": "2017-01-01T00:00:00.000Z",
				"Style": "Senegalese",
				"price": "100",
				"Stylist": "marina",
				"status" : "Completed	",
				"dateCreated": "2017-03-01T00:00:00.000Z"
			},
			{
				"_id": "61b669edfee03a75e9d015d2",
				"appointmentDate": "2017-01-01T00:00:00.000Z",
				"Style": "Senegalese",
				"price": "100",
				"Stylist": "marina",
				"status": "canceled",
				"dateCreated": "2017-01-01T00:00:00.000Z"
			}
		]
	},
```

### Appointment

```json
{
		"_id": "61b669edfee03a75e9d015d0",
		"name": "Elizabeth",
		"phone": "816-907-9526",
		"appointmentDate": "2017-01-01T00:00:00.000Z",
		"Style": "Senegalese",
		"price": "100",
		"deposit": "yes",
		"Stylist": "marina",
		"status" : "Completed	",
		"dateCreated": "2017-03-01T00:00:00.000Z"
	},
```

## Routes

All routes will be prefaced with `/`.

All routes will be protected via JWT after authenticating a user.

### Master Routes

`POST` - `/register`

`POST` - `/login`

### appointment Routes

`/appointment`

`POST` - `/create`
`Put` - `/edit`
`POST` - `/details`
`POST` - `/find`
`POST` - `/findOne`
`POST` - `/cancel`
`POST` - `/complete`

### Client Routes

`/client`

`POST` - `/find`
`POST` - `/findOne`
`PUT` - `/edit`

## External APIs

None ATM.
