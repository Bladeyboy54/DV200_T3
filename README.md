# DV200_T3

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
    - [React application](#react-application)
    - [Server](#server)
  - [Description](#description)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Technologies

### React application

"axios": "^1.4.0",
"bootstrap": "^5.3.1",
"mdb-react-ui-kit": "^6.1.0",
"mdb-ui-kit": "^6.4.1",
"react": "^18.2.0",
"react-bootstrap": "^2.8.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.14.2",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"

### server

"cors": "^2.8.5",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"jsonwebtoken": "^9.0.2",
"mongodb": "^6.0.0",
"mongoose": "^7.5.0",
"multer": "^1.4.5-lts.1",
"nodemon": "^3.0.1",
"path": "^0.12.7"

## Description

The project is a website for e-commerce that focuses on computer graphics card sales. Users can browse a selection of graphics cards on this website, examine comprehensive product details, and place orders. It was developed using React for the front end, Axios for API interactions, and the MDB React UI Kit for styling.

Users may easily explore a selection of graphics cards, click on specific items to read in-depth product details, and choose the number of items they want to purchase. In line with the quantity selected, the system also determines and displays the overall cost.

Users can add items to their shopping carts, which provide an overview of their choices with information on the names, prices, quantities, and related total costs of each item. Users can also take products out of their cart as necessary.

Although the application has a "Checkout" option, its full implementation would rely on the requirements of a particular project. Additionally, the website has a function that, when users visit product pages, suggests random graphics cards to them, encouraging more exploration.

This project serves as the basis for an online store designed for experts and computer hardware enthusiasts looking for excellent graphics cards.

## Getting Started

Ensure that Node.js is installed on your computer

### Prerequisites

Ensure that you  have these installed on your computer or using the web application 
- mongoDB 
- Insomnia
- node.js
- React
- Express.js

### Installation

- React app

`npm i axios bootstrap mdb-react-ui-kit react-bootstrap react-router-dom`

- Server

`npm i cors dotenv express mongodb mongoose multer nodemon path`