# VitalSync – Planned API Contract

Base path: `/api`

| Method | Route | Role | Expected result |
|---|---|---|---|
| POST | `/auth/register` | Public | Create patient or doctor account |
| POST | `/auth/login` | Public | Return auth token and role |
| GET | `/users/me` | Logged-in user | Current profile |
| PATCH | `/users/me` | Logged-in user | Updated own profile |
| GET | `/doctors` | Logged-in user | Doctor directory |
| GET | `/doctors/:doctorId/availability` | Logged-in user | Available slots |
| POST | `/appointments` | Patient | Request appointment |
| GET | `/appointments` | Patient/Doctor | Own or assigned appointments |
| PATCH | `/appointments/:id/cancel` | Owner/authorised doctor | Cancel appointment |
| PATCH | `/appointments/:id/status` | Assigned doctor | Update status |
| GET | `/patients/:patientId` | Patient owner/assigned doctor | Permitted patient profile |
| GET | `/patients/:patientId/records` | Patient owner/assigned doctor | Medical history |
| POST | `/patients/:patientId/records` | Assigned doctor | Add consultation record |
| GET | `/patients/:patientId/prescriptions` | Patient owner/issuing doctor | Prescription list |
| POST | `/patients/:patientId/prescriptions` | Assigned doctor | Create prescription |

## Common response conventions
- `200` – successful read/update
- `201` – resource created
- `400` – invalid input
- `401` – missing or invalid authentication
- `403` – authenticated but not permitted
- `404` – resource not found or not visible to the caller
- `409` – appointment slot conflict
- `500` – unexpected server error

The route list is a planning document. It does not mean the endpoints have been implemented.
