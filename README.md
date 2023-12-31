# Spa Yoga Website
### Welcome to the SpYoga Website project!
This is a full-stack web application for a yoga website, featuring frontend development with React.js, and backend development with Node.js, React.js and MySQL. The project is hosted on Render, and you can visit the 
## live site at [https://spyogasite.onrender.com/](https://spyogasite.onrender.com/).

![image](https://github.com/shivanand1602/yoga_frontend/assets/88983117/39e57995-f7ca-410e-b2cb-993515296dd2)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Setup](#backend-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Homepage:** Informative landing page introducing the yoga center.
- **Classes Page:** Details about available yoga classes, including schedules and instructors.
- **Gallery:** A collection of images showcasing yoga poses and activities.
- **Registration Form:** A form to get in touch with the yoga center or instructor .
 ![image](https://github.com/shivanand1602/yoga_frontend/assets/88983117/f5a93d60-c567-4ac1-a138-03ac28d09530)
- **Payment Form:** Complete the Payment to join the batch
   ![image](https://github.com/shivanand1602/yoga_frontend/assets/88983117/800f43d8-e520-4784-885e-b1f109dc61f0)



## Tech Stack

- **Frontend:**
  - React.js
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js
  - MySQL
  - Real time Database stored on the Clever Cloud
    ![image](https://github.com/shivanand1602/yoga_frontend/assets/88983117/93c09406-344a-40c8-b773-271fa557535e)


- **Hosting:**
  - Render

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/spa-yoga-website.git
Navigate to the project directory:


cd spa-yoga-website
Install dependencies for both frontend and backend:

cd frontend
npm install

cd ../backend
npm install
Usage
Start the backend server:

cd backend
npm start
Start the frontend development server:

cd frontend
npm start
Open your web browser and visit http://localhost:3000 to explore the Spa Yoga Website locally.

### Backend Setup
Make sure to set up the MySQL database connection. Update the database configuration in the backend/config/db.config.js file with your MySQL credentials.

// backend/config/db.config.js
module.exports = {
  HOST: "localhost",
  USER: "your_username",
  PASSWORD: "your_password",
  DB: "spa_yoga_db",
  PORT: 3306,
};
## Contributing
If you would like to contribute to the project, feel free to open issues or submit pull requests. Your suggestions and improvements are highly welcome.


