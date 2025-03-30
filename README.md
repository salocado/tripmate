# Tripmate

Tripmate is a full-stack travel planner application focused on usability and modern web technologies. Users can create, manage, and securely access their trips via a simple login system.

### 🌟 Features

- Create, update, view, and delete trips (CRUD)
- Secure user login with JWT authentication
- Responsive UI with simple navigation

### 💻 Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Express.js with a RESTAPI
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT, stored in localStorage
- **Communication:** Axios

## Environment Variables

This project requires `.env` files located in the **root** of both the **Frontend/tripmate** and **Backend** folders.

* Ensure both files are in the correct directories.
* Use the same port in both files for communication.
* The Frontend runs on its own port (default: 3000).

**📁 Folder Frontend/tripmate:**

Define NEXT_PUBLIC_BACKEND_URL:
``` plaintext
NEXT_PUBLIC_BACKEND_URL=http://localhost:8085
```

**📁 Folder Backend: .env**

Define the backend server port, the connection to the journeydb database in MongoDB, and JWT configurations:
``` plaintext
PORT=8085
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.pphqp.mongodb.net/journeydb?retryWrites=true&w=majority&appName=Cluster0
TOKEN_SECRET=tokentest
JWT_EXPIRES_IN=15m
```

## 🚀 Getting Started

**Install dependencies and start development servers**

In both the **Frontend/tripmate** and **Backend** folders, run:
``` plaintext
npm install
npm run dev
```

**Set up MongoDB**

Create a free cluster at MongoDB Atlas and replace the placeholder in your MONGO_URI with your credentials.
Make sure the database name is journeydb or adjust your connection string accordingly.


## 👤 User Sign-up

You can create a new user by sending a POST request to the following endpoint:

**Endpoint**
``` plaintext
http://localhost:${port}/api/auth/signup
```

**Request Body**
``` plaintext
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "mypassword"
}
```
