# Webtech_App

## Environment Variables

This project requires `.env` files located in the **root** of both the **Backend** and **Frontend/readme** folders.

### Backend: .env

Define the backend server port and the connection to MongoDB:

``` plaintext
PORT=8085
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.pphqp.mongodb.net/journeydb?retryWrites=true&w=majority&appName=Cluster0
```

### Frontend/tripmate: .env

Define NEXT_PUBLIC_BACKEND_URL:

``` plaintext
NEXT_PUBLIC_BACKEND_URL=http://localhost:8085
```

### Notes
* Ensure both files are in the correct directories.
* Use the same port in both files for communication.
* The Frontend runs on its own port (default: 3000).
