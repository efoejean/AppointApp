# Client Management System App

## Overview

The client management system will use a client phone number to keep track of appointments and service history.

## Primary Objectives

- When I login, then I should see a list of all upcoming appointments.
- when I click an appointment, then I should see the appointment details.
- When I click on a client, then I should see a history of their previous services.
- when i click on create appointment, then I should be able to create an appointment.
- when i click on cancel button, then I should be able to cancel an appointment and change the appointment status to canceled.
- when i click on edit button, then I should be able to edit an appointment.
- when i click on appointments then i should be able to see all the appointments.
- when i click on canceled appointments then i should be able to see all the canceled appointments.
- when i click on clients then i should be able to see all the clients.
- when i click on edit client then i should be able to edit a client information.
- when i do a search, then i should be able to search for a client by phone number.
- when i do a search, then i should be able to search for appointment by date or by phone number.

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

All routes will be prefaced with `/api`.

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
