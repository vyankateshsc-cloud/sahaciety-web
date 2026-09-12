# Sahaciety Web

Public Sahaciety website foundation. Governance-led ecosystem for citizens, businesses and societies.

This repo is intentionally separate from `restate-agent`, which remains the WhatsApp real-estate agent.

## Run
npm install
npm run dev

## Deploy
GitHub + Vercel. Add `www.sahaciety.in` after production deployment.

## Architecture rule
The website is an experience layer. Do not create parallel customer, request, workflow, authentication, service-catalogue or governance engines here. Connect to Sahaciety Runtime APIs when ready.
