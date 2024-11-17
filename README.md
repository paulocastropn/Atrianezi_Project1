Sales Manager Application
This is a web-based project tracking application that uses Facebook OAuth for authentication, integrates with MongoDB, and provides dynamic views with Handlebars.js (HBS).

Setup Instructions
Clone the Repository

bash

git clone https://github.com/username/Atrianezi_Project1.git
cd project-tracker
Install Dependencies

bash

npm install
Set Up Environment Variables
Update your environment variables in configs/globals.js or a .env file:

env

PORT=3000
DATABASE_URL=<your-mongodb-url>
FACEBOOK_CLIENT_ID=<your-facebook-app-client-id>
FACEBOOK_CLIENT_SECRET=<your-facebook-app-client-secret>
FACEBOOK_CALLBACK_URL=<your-facebook-callback-url>
Run the Application

bash

npm start
Access the app at http://localhost:3000.

Database Configuration
Ensure the MongoDB connection string in configs/globals.js points to a running MongoDB instance.

Routes Overview
Authentication Routes
GET /auth/facebook
Initiates the Facebook login process.
GET /auth/facebook/callback
Handles Facebook's authentication callback.
Main Routes
GET /
Renders the home page.
GET /projects
Displays a list of projects.
GET /courses
Shows available courses.
Access Control
OAuth Authentication:

Facebook OAuth is used for user login.
New users are registered automatically, while returning users are authenticated via their oauthId.
Session Management:

Users are serialized and stored in the session using passport.
Sessions are handled securely with express-session.
Role-Based Access (if applicable):

Implemented roles like Admin or User can be checked dynamically during requests.
Features
Facebook Login Integration: Easily sign in via Facebook.
Dynamic View Rendering: Handlebars.js for templating.
Database Integration: MongoDB to store user data, projects, and courses.
Error Handling: Centralized error handling for 404 and other server errors.
License
This project is licensed under the MIT License. Contributions and adaptations are welcome.

