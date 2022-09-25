[![Mongodb Verion](https://img.shields.io/badge/Mongodb-5.3-brightgreen)](https://www.mongodb.com/docs/manual/introduction/)
[![Express Verion](https://img.shields.io/badge/Express.js-4.x-brightgreen)](https://expressjs.com/)
[![React Version](https://img.shields.io/badge/React.js-18.2.0-brightgreen)](https://reactjs.org/)
[![Node Verion](https://img.shields.io/badge/Node.js-16.15.1-brightgreen)](https://nodejs.org/en/)

## React banking app

Banking app created during CODE:ME course using MERN stack
(Mongodb, Express.js, React.js, Node.js)

The main tech stack is called "MERN". This stands for Mongo,
Express, React, Node. There's a middleware written in
express.js - a simple REST API. I am using it to authorize
users and also collect all their data. React with
react-router provides a single-page user experience. It has
minimalistic CSS and HTML. The database which I am using is
free and non-relative MongoDB with an external cloud
cluster.

## Features

- REST Api
- React router
- React Hooks
  - State
  - Context
  - Effect
  - Custom
- Cloud and non-relative Database (Mongo)
- Responsive Web Design

The user can create his own account which is stored in the
database. After logging in, it is possible to check the
account balance and send a transfer for a specific user and
credit card management. Personalization settings contains
theme changer - "dark" or "light".

## HOW TO INSTALL:

First, You need to clone whole repository and install dependencies for react:

```
$ git clone https://github.com/MaciejOstrowskiIT/React_banking_app.git
$ cd ./react_banking_app
$ npm install
$ npm run start

```

Second, You have to install dependencies in "server" folder:

```
$ cd ./server
$ npm install
$ npm run dev

```
