# hospital-api
> The server side for a hospital (only APIs) for the doctors of a Hospital. May be used for testing reports management and quarantine + well being of COVID-19 patients.
> There can be 2 types of Users
  - Doctors
  - Patients
> Doctors can log in. For every patient visit, the doctor can:
  - Register the patient in the app
  - After the checkup, create a Report

## Routes
  - /doctors/register
  - /doctors/login
  - /patients/register
  - /patients/:id/create_report
  - /patients/:id/all_reports
  - /reports/:status

## Technologies Used
1.  NodeJS
2.  Express
3.  JOI
4.  MongoDB
5.  Mongoose
6.  jsonwebtoken
7.  bcryptjs
8.  dotenv

## Prerequisites
- Git
- NodeJS
- CLI

## Installation

##### Clone the latest Repository

`git clone https://github.com/rahulsups/hospital-api.git`

##### Into the project directory

`cd hospital-api`

##### Installing NPM dependencies

`npm install`

##### Then simply start your app

`npm start`

#### The Server should now be running at http://localhost:3000/

## Folder Structure

hospital-api <br>
├── controllers <br>
│ --- ├── doctors.js <br>
│ --- ├── patients.js <br>
│ --- └── reports.js
├── models <br>
│ --- ├── Doctor.js <br>
│ --- ├── Patient.js <br>
│ --- └── Report.js <br>
├── node_modules <br>
├── routes <br>
│ --- ├── doctors.js <br>
│ --- ├── patients.js <br>
│ --- ├── privateRoute.js <br>
│ --- └── reports.js <br>
├── .env <br>
├── .gitignore <br>
├── index.js <br>
├── package.json <br>
├── package-lock.json <br>
├── README.md <br>
└── validation.js <br>
