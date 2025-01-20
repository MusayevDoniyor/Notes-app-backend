# Notes API

This is a RESTful API built using Express.js, MongoDB, and JSON Web Token (JWT) for handling user registration, login, and managing notes. The API supports the following features:

## 1. User Registration
- **Endpoint**: `POST /create-account`
- **Description**: Registers a new user by accepting `fullName`, `email`, and `password`. If the user already exists, an error message will be returned.
- **Response**: Returns a JSON object with user details and an access token.

## 2. User Login
- **Endpoint**: `POST /login`
- **Description**: Authenticates an existing user with `email` and `password`. Upon successful login, an access token is returned.
- **Response**: Returns a JSON object with a message and the access token.

## 3. Get User Information
- **Endpoint**: `GET /get-user`
- **Description**: Retrieves the logged-in user's information using a valid JWT token. Returns user details like `fullName`, `email`, and user `_id`.
- **Response**: Returns user details as a JSON object.

## 4. Add Note
- **Endpoint**: `POST /add-note`
- **Description**: Allows the logged-in user to create a new note. Requires `title` and `content` fields. Optionally, you can include `tags`.
- **Response**: Returns a JSON object with the created note details.

## 5. Edit Note
- **Endpoint**: `PUT /edit-note/:noteId`
- **Description**: Updates an existing note's details (`title`, `content`, or `tags`). The user must be the owner of the note.
- **Response**: Returns a JSON object with the updated note details.

## 6. Get All Notes
- **Endpoint**: `GET /get-all-notes`
- **Description**: Retrieves all notes created by the logged-in user. The notes are sorted by `isPinned` value.
- **Response**: Returns a JSON array of all notes.

## 7. Delete Note
- **Endpoint**: `DELETE /delete-note/:noteId`
- **Description**: Deletes a specific note by `noteId` if the logged-in user is the owner.
- **Response**: Returns a success message upon successful deletion.

## 8. Update Note Pin Status
- **Endpoint**: `PUT /update-note-pinned/:noteId`
- **Description**: Updates the `isPinned` status of a note (true or false).
- **Response**: Returns the updated note with a success message.

## 9. Search Notes
- **Endpoint**: `GET /search-notes`
- **Description**: Searches for notes that match a `query` in the `title` or `content` of the notes.
- **Response**: Returns a list of notes matching the search query.

## Authentication
This API uses JWT (JSON Web Tokens) for authentication. For most endpoints, a valid JWT token must be passed in the `Authorization` header in the format `Bearer <token>`.

## Server Status
- **Endpoint**: `GET /`
- **Description**: Returns the current server status, including the server's uptime and the current server time.

## Dependencies
- `express`: A web framework for Node.js.
- `mongoose`: A MongoDB object modeling tool.
- `jsonwebtoken`: A library to sign and verify JWT tokens.
- `cors`: A package to enable Cross-Origin Resource Sharing.
- `dotenv`: A zero-dependency module that loads environment variables from a `.env` file.

## Environment Variables
- `ACCESS_TOKEN_SECRET`: Secret key for signing JWT tokens.
- `CONNECTION_STRING`: MongoDB connection string.

## Example Usage

**Sign Up:**
```bash
POST /create-account
{
  "fullName": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Login:**
```bash
POST /login
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Add Note:**
```bash
POST /add-note
{
  "title": "My First Note",
  "content": "This is the content of the note.",
  "tags": ["important", "personal"]
}
```

