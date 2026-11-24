# VitalSync – Healthcare & Patient Record Management System

## Project Overview

VitalSync is a web-based healthcare record and appointment management platform. It is planned for two main user roles: **Doctor** and **Patient**. The goal is to keep appointment information, patient details, medical history and prescriptions organised in one place.

This repository contains the Sprint 13 planning documents and the Sprint 14 authentication MVP. The current implementation focuses on account registration, secure password hashing, login, JWT authentication and a protected dashboard.

## Project Details

- **Project name:** VitalSync
- **Project type:** Healthcare EHR and appointment management dashboard
- **Track:** Fullstack
- **Primary users:** Doctor and Patient
- **Development approach:** Individual contributor; MVP first, then improvements

## Problem Statement

Patient information and appointment details can be spread across separate records and manual processes. This makes it harder to find previous visit information, check appointment status and keep prescriptions connected to the correct patient.

VitalSync proposes a single web application where patients can manage their appointments and view their own records, while doctors can review assigned patient information and maintain consultation records.

## Project Goals

1. Provide separate, role-aware dashboards for doctors and patients.
2. Allow patients to view doctors' available appointment slots and request bookings.
3. Help doctors review their upcoming appointments and assigned patient records.
4. Keep medical history and prescriptions linked to the relevant patient.
5. Make the interface usable on desktop, tablet and mobile screens.

## User Roles and Permissions

### 1 Doctor

* Access the doctor dashboard.
* View patient details. 
* Access patient medical records.
* Manage patient-related information.

### 2 Patient

* Access personal information.
* View available medical details.
* Manage personal profile information.

## Core Features (Prioritised)

### P0 – MVP

- Login and registration with Doctor/Patient roles
- Role-aware navigation and dashboard
- Patient profile
- Doctor schedule and available time slots
- Appointment booking, cancellation and status tracking
- Doctor's appointment list
- Medical history timeline for an assigned patient
- Prescription creation by a doctor and read-only viewing by the patient
- Form validation, loading states and useful error messages

### P1 – After MVP

- Live appointment availability updates
- Search and filters for appointment lists
- Notification centre for booking status changes
- Downloadable prescription view
- Audit history for sensitive record access

### Out of Scope for the first release

- Online payments and insurance claims
- Video consultations
- Pharmacy inventory
- AI diagnosis or treatment recommendations
- Lab equipment integrations
- Real patient data or production hospital deployment

## Main User Flows

### Patient

Register/Login → Patient Dashboard → Browse Doctors/Slots → Request Appointment → View Appointment Status → View Medical History and Prescriptions.

### Doctor

Login → Doctor Dashboard → Review Today's Appointments → Open Assigned Patient → Review History → Add Consultation Note → Create Prescription.

## Technology Stack

| Layer             | Planned technology     | Purpose                                  |
| ----------------- | ---------------------- | ---------------------------------------- |
| Frontend          | React + Vite           | Single-page web interface                |
| Styling           | Tailwind CSS           | Responsive layouts                       |
| UI components     | shadcn/ui (customised) | Consistent form and dashboard components |
| Backend           | Node.js + Express      | REST API and business rules              |
| Database          | MongoDB + Mongoose     | Persistent application records           |
| Authentication    | JWT + bcrypt           | Session token and password hashing       |
| Real-time updates | Socket.IO (P1)         | Appointment availability/status events   |
| Design            | Figma                  | Wireframes and responsive layouts        |
| Diagrams          | Draw.io                | ERD and architecture diagrams            |

## Planned Database Collections

1. **Users** – name, email, password hash, role and account status.
2. **Patients** – user reference, date of birth, contact details and basic profile information.
3. **Appointments** – patient reference, doctor reference, start/end time, reason and status.
4. **DoctorSchedules** – doctor reference, working days, slot duration and availability windows.
5. **MedicalRecords** – patient reference, doctor reference, appointment reference, visit date and clinical notes.
6. **Prescriptions** – patient reference, doctor reference, appointment reference, medicines and instructions.

## Functional Requirements

* Users should be able to log in securely.
* The system should provide access according to user roles.
* Doctors should be able to access the dashboard.
* Patient information should be stored and managed.
* Medical records should be associated with the respective patient.
* The system should support appointment-related information.
* Authorized users should be able to access relevant information.

## Non-Functional Requirements

- Responsive layout for mobile, tablet and desktop.
- Passwords stored as hashes, never plain text.
- Validate and sanitise incoming data.
- Use HTTPS in deployment and keep secrets in environment variables.
- Return consistent API errors without exposing stack traces or sensitive details.
- Maintain audit events for sensitive record actions in a later iteration.
- Provide accessible labels, keyboard focus states and readable contrast.

## UI/UX Design – Figma

The initial UI/UX designs for VitalSync were created
in Figma before starting the development phase.

### Designed Screens

1. Login & Authentication
2. Doctor Dashboard
3. Patient Details & Medical Records

### Figma Design Link

[View VitalSync Designs](https://www.figma.com/design/gSVKlNK0k66r5dYWQpxCtO/VitalSync-%E2%80%93-Healthcare-Dashboard-UI?node-id=0-1&t=CY2bHlivFsk1rKQX-1)

## Database Architecture

VitalSync will use MongoDB to store and manage application data.

The planned database structure includes the following collections:

| Collection     | Description                                 |
| -------------- | ------------------------------------------- |
| Users          | Stores user information and credentials.    |
| Patients       | Stores patient profile details.             |
| Appointments   | Stores appointment-related information.     |
| MedicalRecords | Stores patient medical history and records. |
| Prescriptions  | Stores prescription details and medicines.  |

MongoDB ObjectId references will be used to establish relationships between related collections.

### ER diagram

![VitalSync ER diagram](./docs/database_plan/VitalSync%20Database%20Architecture.png)

## Github Repository

**GitHub:** https://github.com/SupritaYadav/prodesk-capstone-VitalSync

## Future Scope

* Online appointment scheduling.
* Improved patient record management.
* Notifications and reminders.
* Additional healthcare dashboard features.
* Enhanced reporting and analytics

## References

- [HL7 FHIR R4](https://hl7.org/fhir/R4/) – healthcare data concepts and interoperability reference.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) – authorization design guidance.
- [OWASP Developer Guide: Access Controls](https://devguide.owasp.org/en/04-design/02-web-app-checklist/07-access-controls/) – access-control checklist.
---

**Project:** VitalSync
**Track:** Full Stack Development
**Phase:** Capstone Planning and Architecture



## Sprint 14 – Authentication MVP

The first working slice connects the React frontend, Express API and MongoDB database.

### Implemented in this sprint

- User registration with name, email, password and Doctor/Patient role.
- Password hashing with `bcryptjs` before saving a user.
- Login with password hash comparison.
- JWT generation and verification.
- Protected `/dashboard` route in the React application.
- Authenticated `/api/auth/me` endpoint.
- Logout and session cleanup in the frontend.

### Project Structure

```text
VitalSync/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
└── docs/
    └── database_plan/
```

### Run Locally

**1. Backend**

```bash
cd backend
npm install
```

Copy `.env.example` to `.env`, then add your MongoDB Atlas connection string and a long random `JWT_SECRET`.

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

**2. Frontend** (open a second terminal)

```bash
cd frontend
npm install
```

Copy `.env.example` to `.env`.

```bash
npm run dev
```

Open `http://localhost:5173`.

### Authentication API

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Create an account and return a JWT |
| POST | `/api/auth/login` | Verify credentials and return a JWT |
| GET | `/api/auth/me` | Return the signed-in user's profile (Bearer token required) |
| GET | `/api/health` | Check API and database connection state |

Registration expects `name`, `email`, `password` and `role` (`doctor` or `patient`). Passwords must contain at least 8 characters. The database stores `passwordHash`, not the original password.

### Environment Variables

Backend: `PORT`, `MONGODB_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CLIENT_URL`.

Frontend: `VITE_API_URL`.

Do not commit `.env` files or real credentials. Use the deployment provider's environment-variable settings for production.

### Sprint 14 Scope Note

The dashboard currently confirms the authenticated user's identity and role. Appointment booking, patient records, prescriptions, role-specific data permissions and real-time updates are not implemented by this authentication MVP yet.
