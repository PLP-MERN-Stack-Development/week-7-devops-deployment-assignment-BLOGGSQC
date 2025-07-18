Bug Tracker – MERN Stack (Week 7: Deployment & DevOps Essentials)
Live Links
Frontend (Vercel): https://bugtracker-client-teal.vercel.app/

Backend API (Render): https://week-7-devops-deployment-assignment-9w35.onrender.com

Overview
This is a full MERN stack Bug Tracker application deployed to production as part of Week 7 of the PLP MERN-Stack Development Program.

Users can:

Create new bugs

Update bug details

Delete bugs

View all bugs in a list

Features Implemented
Optimized React build with Vite
Backend with Express & MongoDB Atlas
CI/CD pipelines configured (GitHub → Vercel/Render)
Environment variables configured for dev & production
Secure HTTP headers with Helmet, CORS enabled
Monitoring ready (via Render & Vercel dashboards)

Tech Stack
Frontend: React (Vite)

Backend: Node.js, Express.js

Database: MongoDB Atlas

Deployment:

Frontend → Vercel

Backend → Render

CI/CD: GitHub Actions + Vercel/Render auto-deploy

Environment Variables
Frontend (.env)
VITE_API_URL=https://week-7-devops-deployment-assignment-9w35.onrender.com/api

Backend (.env)
PORT=5000
MONGO_URI=your-mongo-atlas-connection-string
Running Locally

Prerequisites
Node.js and npm installed

MongoDB Atlas or local MongoDB setup

Backend
cd server
npm install
npm run dev
# Runs on http://localhost:5000
Frontend
cd client
npm install
npm run dev

# Runs on http://localhost:5173
CI/CD Setup
GitHub repo connected to both Vercel (frontend) and Render (backend)

Automatic deployments on git push

Environment variables set in Vercel/Render dashboards

Monitoring & Maintenance
Render dashboard for backend logs & uptime

Vercel dashboard for build & deploy logs

MongoDB Atlas for database monitoring & backups

Regular updates can be deployed with a simple git push

Submission Details
Includes:

 Complete MERN stack code

 CI/CD configuration

 Environment variable templates

 Live URLs above

