# TestTrek

TestTrek is a full-stack quiz application designed to facilitate user creation, management, and completion of quizzes. The app ensures seamless data flow between the client and server, providing a secure and user-friendly experience for both quiz takers and administrators.

## Features

- **User Management**: Create and manage user accounts with authentication.
- **Quiz Creation and Management**: Add, edit, and delete quizzes.
- **Quiz Participation**: Users can complete quizzes and see their results.
- **Secure Authentication**: Implemented with secure user authentication using JSON Web Tokens (JWT).
- **RESTful API**: Efficient API for quiz data retrieval, submission, and user management.
- **Responsive Design**: User interface designed to be responsive and intuitive.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Deployed on (add your hosting provider here)

## Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/testtrek.git
   ```

2. Navigate to the project directory:

   ```bash
   cd testtrek
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables by creating a `.env` file:

   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

