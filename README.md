# Zerodha-Clone

Monorepo containing `backend`, `frontend`, and `dashboard` apps.

Quick setup

1. Create a GitHub repository (empty) for this project.
2. Ensure sensitive files are not committed (see `.gitignore`).

Backend

```bash
cd backend
cp .env.example .env   # edit .env with your MONGO_URL
npm install
node index.js
```

Frontend

```bash
cd frontend
npm install
npm start
```

Dashboard

```bash
cd dashboard
npm install
npm start
```

Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Zerodha Clone"
# create repo on GitHub and replace URL below
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Notes

- Do not commit real `.env` files. Put secrets in `.env` and add the file to `.gitignore` (already done).
- If you accidentally committed secrets, rotate them and remove them from history (I can help).
