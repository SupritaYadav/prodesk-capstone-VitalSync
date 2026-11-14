# VitalSync – Healthcare & Patient Record Management System

## Project Overview
VitalSync is a web-based healthcare record and appointment management platform. It is planned for two main user roles: **Doctor** and **Patient**. The goal is to keep appointment information, patient details, medical history and prescriptions organised in one place.

This repository contains the planning documents for Sprint 13. The application itself is **not implemented in this sprint**. The current work focuses on requirements, UI planning and system architecture.

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

1 Doctor

Access the doctor dashboard.

View patient details.

Access patient medical records.

Manage patient-related information.

2 Patient

Access personal information.

View available medical details.

Manage personal profile information.

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
| Layer | Planned technology | Purpose |
|---|---|---|
| Frontend | React + Vite | Single-page web interface |
| Styling | Tailwind CSS | Responsive layouts |
| UI components | shadcn/ui (customised) | Consistent form and dashboard components |
| Backend | Node.js + Express | REST API and business rules |
| Database | MongoDB + Mongoose | Persistent application records |
| Authentication | JWT + bcrypt | Session token and password hashing |
| Real-time updates | Socket.IO (P1) | Appointment availability/status events |
| Design | Figma | Wireframes and responsive layouts |
| Diagrams | Draw.io | ERD and architecture diagrams |

## Planned Database Collections
1. **Users** – name, email, password hash, role and account status.
2. **Patients** – user reference, date of birth, contact details and basic profile information.
3. **Appointments** – patient reference, doctor reference, start/end time, reason and status.
4. **DoctorSchedules** – doctor reference, working days, slot duration and availability windows.
5. **MedicalRecords** – patient reference, doctor reference, appointment reference, visit date and clinical notes.
6. **Prescriptions** – patient reference, doctor reference, appointment reference, medicines and instructions.

## Functional Requirements

Users should be able to log in securely.

The system should provide access according to user roles.

Doctors should be able to access the dashboard.

Patient information should be stored and managed.

Medical records should be associated with the respective patient.

The system should support appointment-related information.

Authorized users should be able to access relevant information.




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
[View VitalSync Designs](
https://www.figma.com/design/gSVKlNK0k66r5dYWQpxCtO/VitalSync-%E2%80%93-Healthcare-Dashboard-UI?node-id=0-1&t=CY2bHlivFsk1rKQX-1)

## Database Architecture

VitalSync will use MongoDB to store and manage application data.

The planned database structure includes the following collections:


| Collection   | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| Users        | Stores user information and credentials.                 |
| Patients   | Stores patient profile details.                            |
| Appointments     | Stores appointment-related information.              |
| MedicalRecords        | Stores patient medical history and records.               |
| Prescriptions | Stores prescription details and medicines.               |

MongoDB ObjectId references will be used to establish relationships between related collections.

### ER diagram
![VitalSync ER diagram](./docs/database_plan/VitalSync%20Database%20Architecture.png)


## Sprint Roadmap
| Sprint | Planned work |
|---|---|
| Sprint 13 | PRD, wireframes, ERD and architecture |
| Sprint 14 | MVP setup, authentication, role-aware layouts and profiles |
| Sprint 15 | Appointment and medical record CRUD flows |
| Sprint 16 | Prescription flow, real-time updates and UX improvements |
| Sprint 17 | Testing, security review, CI/CD and deployment |

## Risks and Open Questions
- Appointment slot conflicts need a database-level strategy, not only a frontend check.
- Medical data is sensitive; access rules must be tested for both roles.
- This is an educational prototype, not a certified clinical system. It must not be used for real patient care.
- Before a real deployment, applicable healthcare, privacy, retention and security requirements must be reviewed with qualified stakeholders.

## References
- [HL7 FHIR R4](https://hl7.org/fhir/R4/) – healthcare data concepts and interoperability reference.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) – authorization design guidance.
- [OWASP Developer Guide: Access Controls](https://devguide.owasp.org/en/04-design/02-web-app-checklist/07-access-controls/) – access-control checklist.

---

