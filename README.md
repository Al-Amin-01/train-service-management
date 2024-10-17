
# Train System Backend

This is a backend system built with Node.js, Express, and MongoDB that supports managing train services, stations, user wallets, and ticketing. It uses JWT authentication and bcrypt for secure password hashing. The system allows users to manage their wallets, purchase tickets, and view train schedules and stations.


## Features -


**User Authentication:** Register and login with JWT-based token authentication.

**Station Management:** Create, update, and retrieve stations.

**Train Management:** Create and manage train schedules, including multiple stops at stations.

**Wallet Integration:** Users can add funds to their wallets.

**Ticketing System:** Purchase tickets based on train schedules and wallet balance.




## Tech Stack -

**Node.js:** Server-side JavaScript runtime.

**Express.js:** Web framework for Node.js.

**MongoDB:** NoSQL database for storing data.

**Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.

**JWT:** JSON Web Token for authentication.

**Bcrypt:** Library to hash and compare passwords securely.

**Dotenv:** Environment variable management.


## Installation -

### Prerequisites:
  1.Node.js (v14+)

  2.MongoDB (running locally or cloud-based)
    
  3.Postman (for API testing)

### Steps 
**1.Clone the Repository:**

```bash
  https://github.com/Al-Amin-01/train-service-management
  cd train-service-management
```
**2.Install dependencies:**

```bash
  npm install
```

**3.Create .env File: In the root directory, create a .env file and add the following variables:**

```bash
  PORT
  MONGO_URI
  JWT_SECRET
```

**4.Start the Application:**

```bash
  npm run dev
```
