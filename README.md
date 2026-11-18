# cmed-frontend

React front end for CampusMed, a campus healthcare web app. It includes a marketing home page, patient login/signup, a patient dashboard (profile, last consultation, appointment requests, notifications), a complaint form, and a consultation history page.

The API is in [cmed-backend](https://github.com/clintunn/cmed-backend).

## Tech stack

- React 18 (Create React App)
- React Router 6
- Bootstrap, React Bootstrap, Font Awesome, and react-icons
- axios

## Features

- Home page describing consultations, appointments, and login
- Login / signup, calling `POST /api/patients/login` on the backend
- Patient dashboard: profile, last consultation, request appointment, and notifications
- Patient complaint form (`POST /api/complaints` — this path is not mounted on the current backend)
- Consultation history (`GET /api/consultations/patientHistory`)

A `Chat` page component exists (`src/pages/Chat.js` with a sidebar and message form) but it is not registered in the router, and the form does not send a request yet.

API URLs are hardcoded to `http://localhost:5001` (the dashboard also references a LAN IP for one notifications call). There is no `.env` file. Run [cmed-backend](https://github.com/clintunn/cmed-backend) on port 5001 first.

## Run locally

```bash
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

Other scripts: `npm test`, `npm run build`.

## Project structure

```
src/pages/           # Home, Login, Dashboard, Complaint, PatHistoryPage, Chat
src/Component/       # Navigation, sidebars, message form
public/
```

Built by Clinton Nkamigbo · https://clinton-nkamigbo.vercel.app
