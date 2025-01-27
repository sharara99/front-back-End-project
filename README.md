# Simple 3-Tier Web Application

This project is a simple 3-tier web application with a static frontend and a Node.js backend. The frontend, and the backend built with Express.js.

## Project Structure

- **Frontend**: Static HTML served by Nginx.
- **Backend**: Node.js RESTful API using Express.js.
- **Dockerizing The App**: Docker Files To Build Images for The FrontEnd and The BackEnd.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Running the Backend

1. Navigate to the `backend` directory.
2. Install dependencies:

   ```bash
      npm install
   ```

3. Start the backend server:

   ```bash
      npm start
   ```

## Dockerizing The Application

### Building and Running Containers Locally

#### Frontend

1- Navigate to the Frontend directory:

   ```bash
      cd Frontend
   ```

2- Build the Docker image:

   ```bash
      docker build -t frontend:latest .
   ```

3- Run the container:

   ```bash
      docker run -d -p 8080:80 frontend:latest
   ```

4- Test the frontend:

   ```bash
      curl http://localhost:8080
   ```

or open http://localhost:8080/ in a web browser.

#### Backend

1- Navigate to the Frontend directory:

   ```bash
      cd ../Backend
   ```

2- Build the Docker image:

   ```bash
      docker build -t backend:latest .
   ```

3- Run the container:

   ```bash
      docker run -d -p 8080:80 frontend:latest
   ```

4- Test the frontend:

   ```bash
      curl http://localhost:3000/api
   ```

or open http://localhost:3000/api in a web browser.

### Pushing Images to Docker Hub

Before pushing images, log in to Docker Hub:

```bash
   Docker login
```

#### Frontend

1- Build and tag the image:

   ```bash
      docker build -t hendawyy/frontend:latest .
   ```

2- Push the image to Docker Hub:

   ```bash
      docker push hendawyy/frontend:latest
   ```

#### Backend

1- Build and tag the image:

   ```bash
   docker build -t hendawyy/backend:latest .
   ```

2- Push the image to Docker Hub:

   ```bash
   docker push hendawyy/backend:latest
   ```

### Pulling and Running Images from Docker Hub

#### Frontend

1- Pull the image:

   ```bash
   docker pull hendawyy/frontend:latest
   ```

2- Run the container:

   ```bash
   docker run -d -p 8080:80 hendawyy/frontend:latest
   ```

3- Access the frontend at:

http://localhost:8080/

#### Backend

1- Pull the image:

   ```bash
   docker pull hendawyy/backend:latest
   ```

2- Run the container:

   ```bash
   docker run -d -p 3000:3000 hendawyy/backend:latest
   ```

3- Access the backend at:

http://localhost:3000/api

By following these steps, you can successfully containerize and deploy your 3-tier web application using Docker. 🚀