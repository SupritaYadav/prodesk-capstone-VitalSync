# Prompts.md – VitalSync Planning Notes

This file records how AI assistance was used during the planning phase. The prompts are written as working notes: some ask for explanations, some compare design choices, and some help review the project scope. The final decisions should be checked and understood before implementation.

## 1. Understanding the assignment
**Prompt:** I have been given a capstone planning sprint where I must submit a PRD, at least three UI wireframes, a system architecture diagram and an ER diagram. Explain the difference between these deliverables in simple terms and what evidence should be included in each one.

**What I used it for:** Understanding the expected submission before starting the design.

## 2. Comparing the project options
**Prompt:** Compare an enterprise LMS, a healthcare EHR dashboard and an agile project-management tool for a five-week individual full-stack capstone. Consider database relationships, role-based features, UI complexity and a realistic MVP. Explain the trade-offs instead of choosing only the easiest option.

**What I used it for:** Comparing the options and deciding whether the healthcare project could be kept within a manageable scope.

## 3. Explaining the EHR concept
**Prompt:** Explain an Electronic Health Record system using a simple example of a patient booking an appointment, visiting a doctor and receiving a prescription. Also explain which parts belong to patient management and which parts belong to appointment management.

**What I used it for:** Understanding the domain workflow before writing requirements.

## 4. Keeping the MVP realistic
**Prompt:** Review this proposed VitalSync feature list for a five-week student capstone. Separate essential MVP features from later enhancements. Point out features that could make the scope too large, such as payments, video calls or AI diagnosis.

**What I used it for:** Prioritising the first release and avoiding scope creep.

## 5. Role permissions
**Prompt:** For a healthcare portal with Doctor and Patient roles, make a permission matrix. Include examples of what should happen if a patient changes a patient ID in an API URL to try to read someone else's medical history. Explain why hiding a button in React is not enough.

**What I used it for:** Planning role-based access and understanding server-side authorisation.

## 6. Database design explanation
**Prompt:** I am planning MongoDB collections for Users, Patients, Appointments, DoctorSchedules, MedicalRecords and Prescriptions. Explain which documents should reference each other using ObjectIds, and when embedding would or would not make sense. Keep the example suitable for a beginner.

**What I used it for:** Understanding the relationships before drafting the ER diagram.

## 7. Appointment slot logic
**Prompt:** Explain a possible double-booking problem in an appointment system. If two patients click the same available slot at almost the same time, why is checking availability only in the browser unsafe? Suggest a backend/database-level approach without writing the implementation yet.

**What I used it for:** Identifying an important business rule and a design risk.

## 8. Wireframe review
**Prompt:** Review the planned Login, Dashboard and Patient Details screens for a healthcare web app. What information should be visible first on each screen? Suggest a simple responsive layout and avoid adding decorative features that do not support a user task.

**What I used it for:** Checking the screen hierarchy before building the Figma frames.

## 9. Architecture review
**Prompt:** Explain the request flow in a React + Express + MongoDB application. Use the example of a patient booking an appointment and show where authentication, role checks, validation and database operations happen.

**What I used it for:** Understanding the responsibilities of each application layer.

## 10. Healthcare data standards
**Prompt:** What is HL7 FHIR at a high level? Explain how Patient, Appointment and MedicationRequest concepts relate to an EHR project, and clarify the difference between learning from the standard and claiming full FHIR compliance.

**What I used it for:** Learning the terminology and keeping interoperability claims accurate.

## 11. Final scope check
**Prompt:** Check this VitalSync PRD for unclear requirements, conflicting role permissions, missing error states and features that are too ambitious for an individual five-week capstone. Give practical corrections and explain the reason for each one.

**What I used it for:** Reviewing the planning document before submission.



## 12. Understanding the authentication implementation
**Prompt:** Explain the registration and login flow in a React + Express + MongoDB application. Show where password hashing, password comparison, JWT creation and token verification happen. Keep the explanation beginner-friendly and do not add unrelated healthcare features.

**What I used it for:** Understanding the end-to-end authentication flow before testing the Sprint 14 MVP.

## 13. Reviewing password storage
**Prompt:** Review a Mongoose user model and registration route that use bcryptjs. Check that the original password is never saved, the password hash is excluded from normal query results, and login compares the entered password with the stored hash.

**What I used it for:** Checking the password-handling logic against the sprint security requirement.

## 14. Understanding JWT-protected routes
**Prompt:** Explain how an Express middleware reads a Bearer token from the Authorization header, verifies its signature and makes the user's identity available to a protected route. Include common 401 cases.

**What I used it for:** Understanding why the backend must protect API routes instead of relying only on frontend navigation.

## 15. Testing the registration and login flow
**Prompt:** Give me a manual test checklist for a full-stack authentication MVP: successful registration, duplicate email, invalid email, short password, wrong login password, valid login, expired or missing token, dashboard refresh and logout.

**What I used it for:** Planning the Sprint 14 QA demo and checking both successful and error cases.
