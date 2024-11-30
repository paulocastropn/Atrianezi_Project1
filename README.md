Here’s the content for your existing README file:  

---

## **Project Tracker Application**

This project is a web application designed to manage projects and courses, featuring secure Facebook OAuth authentication, MongoDB integration, and dynamic views using Handlebars.js (HBS).  

---

### **Setup Instructions**

1. **Clone the Repository**  
   Clone the project to your local system:
   ```bash
   git clone https://github.com/username/project-tracker.git
   cd project-tracker
   ```

2. **Install Dependencies**  
   Run the following command to install required Node.js packages:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Add the following variables to the `configs/globals.js` file:
   ```js
   module.exports = {
     ConnectionStrings: {
       MongoDB: "<your-mongodb-connection-string>",
     },
     Authentication: {
       facebook: {
         ClientId: "<your-facebook-app-client-id>",
         ClientSecret: "<your-facebook-app-client-secret>",
         CallbackUrl: "<your-facebook-callback-url>",
       },
     },
   };
   ```

4. **Start the Application**  
   Run the application:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:5000](http://localhost:5000).

---

### **Routes Overview**

#### **Authentication Routes**
- **GET /auth/facebook**  
  Redirects users to Facebook for authentication.  

- **GET /auth/facebook/callback**  
  Handles authentication response and logs in the user.  

---

#### **Main Routes**
- **GET /**  
  Displays the home page.  

- **GET /projects**  
  Shows the list of projects.  

- **GET /courses**  
  Displays the courses.  

---

### **Access Control**

1. **Authentication**:  
   - Users authenticate via Facebook OAuth using Passport.js.  
   - First-time users are registered in the database.  

2. **Session Management**:  
   - User sessions are managed with `express-session`.  
   - Session data includes the user ID and is serialized/deserialized for authentication.  

---

### **Handlebars Helpers**

- **Dropdown Rendering**:  
  `createOptionElement(currentValue, selectedValue)`  
  Dynamically renders `<option>` tags with appropriate `selected` attributes.  

- **Date Formatting**:  
  `toShortDate(longDateValue)`  
  Converts a `Date` object into a short format (`YYYY-MM-DD`).  

---

### **Error Handling**

- **404 Handler**:  
  Unhandled routes display a 404 error page.  

- **Global Error Handler**:  
  Renders detailed error messages in development mode and minimal information in production.  

---

### **Dependencies**

- **Core Modules**:  
  - `express`  
  - `mongoose`  
  - `passport`  
  - `passport-facebook`  
  - `express-session`  
  - `hbs`  

Refer to `package.json` for a complete list of dependencies.  

---

### **License**

This project is licensed under the MIT License.  

---  

You can copy and paste this content into your README file, adjusting the `globals.js` paths or adding details specific to your project.
