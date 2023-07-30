# Bug Tracking System - MERN Stack

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Apurva-tech/unite?logo=github&style=for-the-badge)](https://github.com/Apurva-tech/) 
[![GitHub last commit](https://img.shields.io/github/last-commit/Apurva-tech/unite?style=for-the-badge&logo=git)](https://github.com/Apurva-tech/) 
[![GitHub stars](https://img.shields.io/github/stars/Apurva-tech/unite?style=for-the-badge)](https://github.com/Apurva-tech/unite/stargazers) 
[![My stars](https://img.shields.io/github/stars/Apurva-tech?affiliations=OWNER%2CCOLLABORATOR&style=for-the-badge&label=My%20stars)](https://github.com/Apurva-tech/unite/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/Apurva-tech/unite?style=for-the-badge&logo=git)](https://github.com/Apurva-tech/unite/network)
[![Code size](https://img.shields.io/github/languages/code-size/Apurva-tech/unite?style=for-the-badge)](https://github.com/Apurva-tech/unite)
[![Languages](https://img.shields.io/github/languages/count/Apurva-tech/unite?style=for-the-badge)](https://github.com/Apurva-tech/unite)
[![Top](https://img.shields.io/github/languages/top/Apurva-tech/unite?style=for-the-badge&label=Top%20Languages)](https://github.com/Apurva-tech/unite)
[![Issues](https://img.shields.io/github/issues/Apurva-tech/unite?style=for-the-badge&label=Issues)](https://github.com/Apurva-tech/unite)
[![Watchers](	https://img.shields.io/github/watchers/Apurva-tech/unite?label=Watch&style=for-the-badge)](https://github.com/Apurva-tech/unite/) 

## Overview

This Bug Tracking System is a web application that allows users to report, track, and manage bugs and issues in their software projects. It is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a full-stack solution for bug tracking and management.

## Features

- User Authentication: Users can sign up and log in using secure authentication mechanisms.
- Bug Reporting: Users can report bugs by providing detailed information about the issue, including its severity, steps to reproduce, and   attachments if necessary.
- Bug Tracking: Bugs are categorized and displayed in a list, allowing users to track their progress and status.
- Bug Management: Admin users can assign bugs to developers, set priorities, and update the bug status.
- Search and Filters: Users can search for bugs based on keywords or apply filters to find specific bugs quickly.

## Landing Page

- ![image](https://user-images.githubusercontent.com/59837325/125426848-39db8eeb-3e84-424d-869c-5b344ba55ba1.png)

## Dashboard

- ![image](https://user-images.githubusercontent.com/59837325/125428224-08fcf962-46af-470a-abae-aaa893d2e0c7.png)

## Bugs page

- ![image](https://user-images.githubusercontent.com/59837325/125428224-08fcf962-46af-470a-abae-aaa893d2e0c7.png)

## Create Bug page

- ![image](https://user-images.githubusercontent.com/59837325/125428224-08fcf962-46af-470a-abae-aaa893d2e0c7.png)

## Individual Bug page

- ![image](https://user-images.githubusercontent.com/59837325/125428224-08fcf962-46af-470a-abae-aaa893d2e0c7.png)

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