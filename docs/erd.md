# VitalSync – ER Diagram and Collection Plan

```mermaid
erDiagram
    USERS ||--o| PATIENTS : "has profile"
    USERS ||--o{ DOCTOR_SCHEDULES : "owns"
    USERS ||--o{ APPOINTMENTS : "doctor"
    PATIENTS ||--o{ APPOINTMENTS : "books"
    PATIENTS ||--o{ MEDICAL_RECORDS : "has"
    USERS ||--o{ MEDICAL_RECORDS : "doctor creates"
    APPOINTMENTS ||--o{ MEDICAL_RECORDS : "may produce"
    PATIENTS ||--o{ PRESCRIPTIONS : "receives"
    USERS ||--o{ PRESCRIPTIONS : "doctor issues"
    APPOINTMENTS ||--o{ PRESCRIPTIONS : "associated with"

    USERS {
        ObjectId _id PK
        string fullName
        string email UK
        string passwordHash
        string role
        string accountStatus
        date createdAt
    }
    PATIENTS {
        ObjectId _id PK
        ObjectId userId FK
        date dateOfBirth
        string phone
        string emergencyContact
    }
    DOCTOR_SCHEDULES {
        ObjectId _id PK
        ObjectId doctorUserId FK
        string workingDay
        string startTime
        string endTime
        int slotMinutes
        bool isActive
    }
    APPOINTMENTS {
        ObjectId _id PK
        ObjectId patientId FK
        ObjectId doctorUserId FK
        datetime startAt
        datetime endAt
        string reason
        string status
    }
    MEDICAL_RECORDS {
        ObjectId _id PK
        ObjectId patientId FK
        ObjectId doctorUserId FK
        ObjectId appointmentId FK
        date visitDate
        string diagnosisNote
        string treatmentNote
    }
    PRESCRIPTIONS {
        ObjectId _id PK
        ObjectId patientId FK
        ObjectId doctorUserId FK
        ObjectId appointmentId FK
        array medicines
        string instructions
        date issuedAt
    }
```

## Relationship notes
- A User has a role of `patient` or `doctor`. Patient-specific profile details live in Patients; doctor schedule entries refer to the doctor's User record.
- A Patient can have many Appointments, MedicalRecords and Prescriptions.
- A Doctor can have many Appointments, MedicalRecords and Prescriptions.
- An Appointment can be linked to a consultation record and one or more prescription documents.
- The diagram shows logical relationships. MongoDB does not enforce foreign keys in the same way as a relational database; references must be validated by application logic.

## Initial indexes to consider
- `Users.email`: unique index.
- `Appointments`: compound index on doctor and start time; add a conflict-prevention strategy for confirmed bookings.
- `MedicalRecords`: index on patient and visit date.
- `Prescriptions`: index on patient and issued date.

The exact appointment conflict strategy should be finalised during implementation and tested with concurrent booking requests.
