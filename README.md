# Webtech_App

## Environment Variables

This project requires `.env` files located in the **root** of both the **Backend** and **Frontend** folders.

### Backend: .env

Define the backend server port:

``` plaintext
PORT=8085
```

### Frontend: .env

Define the backend URL:

``` plaintext
NEXT_PUBLIC_BACKEND_URL=http://localhost:8085
```

### Notes
* Ensure both files are in the correct directories.
* Use the same port in both files for communication.
* The Frontend runs on its own port (default: 3000).
