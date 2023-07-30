# Bug Tracking System - MERN Stack

## Overview

This Bug Tracking System is a web application that allows users to report, track, and manage bugs and issues in their software projects. It is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a full-stack solution for bug tracking and management.

## Features

- User Authentication: Users can sign up and log in using secure authentication mechanisms.
- Bug Reporting: Users can report bugs by providing detailed information about the issue, including its severity, steps to reproduce, and   attachments if necessary.
- Bug Tracking: Bugs are categorized and displayed in a list, allowing users to track their progress and status.
- Bug Management: Admin users can assign bugs to developers, set priorities, and update the bug status.
- Search and Filters: Users can search for bugs based on keywords or apply filters to find specific bugs quickly.

## Landing Page

- ![landing page](https://github.com/Sumit-910/bug-tracker/assets/102291443/377ca6e7-0827-44c7-9d2a-9575310068fa)

## Dashboard
- ![dashboard](https://github.com/Sumit-910/bug-tracker/assets/102291443/3b17a7c6-12c7-46a3-84b1-bebaf35b5d2d)

## Bugs page
![bugs page](https://github.com/Sumit-910/bug-tracker/assets/102291443/747ada5b-8046-4e07-9a4b-903d94b075a7)

## Create Bug page
![create bug](https://github.com/Sumit-910/bug-tracker/assets/102291443/3e2ea5dd-85cb-4682-acdf-0679c0757278)

## Individual Bug page
![individual bug](https://github.com/Sumit-910/bug-tracker/assets/102291443/8fb18929-3c21-4ba1-aa07-24118fcedd26)


### Tools and Languages: 
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a></p>


## Installation

Clone the repository:

```bash
git clone https://github.com/Sumit-910/bug-tracker.git .
```
Install dependencies for the client:

```bash
cd ./client
npm i
```
Install dependencies for the server:

```bash
cd..
cd ./server
npm i
```

Create a .env file in the server folder with the following content:
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_jwt
```
Run the application
```bash
npm start
```
Open a new terminal
```bash
cd ./client
npm start
```

The backend will run on http://localhost:5000, and the frontend will run on http://localhost:3000.

### Folder Structure
```bash
bug-tracking-system/
├── server/           # Node.js Express server
│   ├── controllers/   # Route handlers
│   ├── models/        # MongoDB data models
│   ├── routes/        # API routes
│   └── ...
│
└── client/          # React.js frontend
    ├── public/        # Static files
    ├── src/           # React components and application logic
    ├── App.js         # Main application component
    └── ...
```
