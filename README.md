# DV200_T3

<h5 align="center" style="padding:0;margin:0;">Bladen Lehnberg</h5>
<h5 align="center" style="padding:0;margin:0;">221146</h5>
<h6 align="center">DV200 - Term 3 | 2023</h6>
</br>
<p align="center">

  <a href="https://github.com/Bladeyboy54/DV200_T3">
    <img src="dv200t3\src\components\logomain.svg" alt="Logo" width="auto" height="200px">
  </a>
  
  <h3 align="center">Tiger Technologies</h3>

  <p align="center">
    A dashboard made 
    <br />
    <a href="https://github.com/Bladeyboy54/Lehnberg-Bladen-DV200_T1/tree/main/api"><strong>Explore the Files »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/tYHNM0-9S04">View Demo</a>
    ·
    <a href="bug report link">Report Bug</a>
    ·
    <a href="Maybe">Request Feature</a>
    <br />
    Tiger Technologies was created as a means for everyday not-so-tech-savvy users to purchase Graphics cards.
  </p>



## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


## About The Project

### Project Description

The project is a website for e-commerce that focuses on computer graphics card sales. Users can browse a selection of graphics cards on this website, examine comprehensive product details, and place orders. It was developed using React for the front end, Axios for API interactions, and the MDB React UI Kit for styling.

Users may easily explore a selection of graphics cards, click on specific items to read in-depth product details, and choose the number of items they want to purchase. In line with the quantity selected, the system also determines and displays the overall cost.

Users can add items to their shopping carts, which provide an overview of their choices with information on the names, prices, quantities, and related total costs of each item. Users can also take products out of their cart as necessary.

Although the application has a "Checkout" option, its full implementation would rely on the requirements of a particular project. Additionally, the website has a function that, when users visit product pages, suggests random graphics cards to them, encouraging more exploration.

This project serves as the basis for an online store designed for experts and computer hardware enthusiasts looking for excellent graphics cards.

### Built With

#### Front End
* Axios
* Bootstrap
* mdb-react-ui-kit
* React
* react-router-dom

#### Server
* jsonwebtoken
* express
* dotenv
* cors
* mongodb
* mongoose
* multer
* nodemon

## Getting Started

The following will allow you to get a copy of the project and have it running on your local machine.

### Prerequisites

Ensure that you  have these installed on your computer or using the web application 
- `mongoDB` 
- `Insomnia`
- `node.js`
- `React`
- `Express.js`

### How to Install

1. Clone Repository </br>

Run the following in the command line to clone the project:
   ```sh
   git clone https://github.com/Bladeyboy54/DV200_T3.git
   ```
   
2. Install Server Dependencies </br>

Run the following in the command line to install the required dependencies:
   ```sh
   cd server
   npm i 
   ```

3. start the server </br>
Run the following in the terminal to start the Server
   ```sh
   npm run dev 
   ```
   
4. Install React Dependencies </br>

In a new terminal run the following in the command line to install all the required dependencies:
   ```sh
   cd dv200t3
   npm i 
   ```
   
5. Run programme </br>
Run the following in the terminal to start the React app
   ```sh
   npm start 
   ```

## Features and Functionality 

   - Users can browse a selection of graphics cards on the website.

   - Users can examine comprehensive product details for each graphics card.

   - Users can place orders for the graphics cards they choose.

   - Users can easily explore a variety of graphics cards.
   - Users can click on specific items to read in-depth product details.

   - Users can select the number of items they want to purchase.

   - The system calculates and displays the overall cost based on the quantity selected.

   - Users can add items to their shopping carts.

   - The shopping cart provides an overview of the user's choices.
   
   - It displays information on the names, prices, quantities, and total costs of each item.

   - Users can add and remove products from their cart as needed.

   - The application has a "Checkout" option for users to proceed with their purchases.

   - When users visit product pages, the website suggests random graphics cards to encourage further exploration.

   - The project is designed for experts and computer hardware enthusiasts looking for high-quality graphics cards.




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
