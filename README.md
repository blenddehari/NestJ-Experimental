NestJS CRUD API with MikroORM and Docker
This repository contains a NestJS CRUD API application that uses MikroORM for database management and Docker for containerization. The application is set up to work with a PostgreSQL database, and includes a pgAdmin instance for easy database management.

Getting Started
Prerequisites
Ensure you have the following installed on your machine:

Docker
Docker Compose
Running the Application
To start the application, follow these steps:

Clone the repository:

git clone https://github.com/blenddehari/NestJ-Experimental.git
cd NestJ-Experimental

Set up environment variables:

Create a .env file in the root directory of the project and configure the following environment variables:

POSTGRES_DB=books_db
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_HOST=localhost
POSTGRES_PORT=5433
PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=admin

Run the application using Docker Compose:

Start the application stack (NestJS API, PostgreSQL, and pgAdmin) with the following command:

docker-compose up -d
This command will build and start the Docker containers in detached mode.

Check the running containers:

Verify that the containers are running:

docker-compose ps
You should see containers for the PostgreSQL database, pgAdmin, and the NestJS application.

Accessing the Application
API: The NestJS CRUD API will be available at http://localhost:3000.
pgAdmin: Access pgAdmin at http://localhost:8080. Use the credentials provided in the .env file to log in.
Database Migrations
To create and run database migrations, use the following commands:

Create a migration:

npx mikro-orm migration:create
Run the migration:

npx mikro-orm migration:up
Interacting with the API
You can interact with the API using tools like Postman, Thunder Client, or cURL. Example API endpoints include:

GET /books: Retrieve all books.
GET /books/:id: Retrieve a book by ID.
POST /books: Create a new book.
PUT /books/:id: Update an existing book.
DELETE /books/:id: Delete a book.

Stopping the Application
To stop the running containers, use:

docker-compose down
This will stop and remove the containers.
