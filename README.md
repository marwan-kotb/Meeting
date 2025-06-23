# Meeting

A full-stack CRM Meetings Module built with **React**, **Node.js**, **Express**, and **MongoDB**. This module allows authenticated users to create, view, delete, and manage meetings related to Contacts or Leads.

---

##  Features Implemented

- **JWT Authentication** protected API routes
- **Create Meeting** with:
  - Agenda
  - Location
  - Date & Time
  - Attendees (Contacts or Leads)
  - Notes
- **View Meeting** details
- **Delete Single**
---

## Screenshots

### Create Meeting Form

![Create Meeting](screenshots/create-meeting.png)

### Meeting List View

![List](screenshots/meeting-list.png)

### 🔹 Meeting Details

![Details](screenshots/meeting-details.png)

---

## How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

---

### 2. Install Dependencies

#### Server (API)
```bash
cd server
npm install
```

#### Client (React Frontend)
```bash
cd client
npm install
```

---

### 3. Set Up Environment Variables

Create a `.env` file in the `Client/` folder with the following:

```env
REACT_APP_BASE_URL=http://localhost:5001/
```
---

### 4. Run the App

#### Start Server
```bash
cd server
npm run dev
```

#### Start Client
```bash
cd client
npm start
```