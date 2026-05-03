# 🚀 Deployment Guide - Zerodha Clone

This guide covers deploying the Zerodha Clone to production across frontend (Vercel) and backend (Heroku/Railway).

---

## 📋 Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Vercel)                        │
│  - React Landing Page (frontend/)                           │
│  - React Dashboard (dashboard/)                             │
│  - CDN enabled, auto-scaling                                │
└────────────────────┬────────────────────────────────────────┘
                     │ API Calls
                     ↓
┌─────────────────────────────────────────────────────────────┐
│              Backend API (Heroku/Railway)                   │
│  - Express.js REST API                                      │
│  - MongoDB Atlas (Cloud Database)                           │
│  - Environment: Production                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Prerequisites

### Required Accounts
- [ ] GitHub account
- [ ] Vercel account (free)
- [ ] MongoDB Atlas account (free M0 tier)
- [ ] Heroku OR Railway account (for backend)

### Local Setup
```bash
# Clone repository
git clone https://github.com/ashrithamadamsetty/Zerodha.git
cd Zerodha

# Install dependencies
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```

---

## 📊 Step 1: Setup MongoDB Atlas (Database)

### 1.1 Create MongoDB Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up / Login
3. Create a new cluster (M0 - Free tier)
4. Wait for cluster to initialize (~10 minutes)

### 1.2 Create Database User
1. Go to **Database Access** → **Add New Database User**
2. Username: `zerodha_user`
3. Password: Generate strong password (copy it!)
4. Set User Privileges: **Read and write to any database**

### 1.3 Whitelist IP & Get Connection String
1. Go to **Network Access** → **Add IP Address**
2. Click **Allow Access from Anywhere** (for now)
3. Go to **Clusters** → Click **Connect**
4. Select **Connect your application**
5. Copy the connection string:
   ```
   mongodb+srv://zerodha_user:<password>@cluster0.xxxxx.mongodb.net/?appName=ZerodhaClone
   ```
6. Replace `<password>` with your actual password

---

## 🖥️ Step 2: Deploy Backend

### Option A: Deploy to Heroku (Recommended for beginners)

#### 2.1 Prepare Backend
```bash
cd backend
```

#### 2.2 Update .env file
```bash
cp .env.example .env
# Edit .env:
NODE_ENV=production
PORT=3002
MONGO_URL=mongodb+srv://zerodha_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?appName=ZerodhaClone
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

#### 2.3 Create Procfile
```bash
# In /backend directory, create file: Procfile
echo "web: node index.js" > Procfile
```

#### 2.4 Push to Heroku
```bash
# Install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create new app
heroku create zerodha-clone-api

# Add environment variables
heroku config:set MONGO_URL="mongodb+srv://zerodha_user:PASSWORD@cluster0.xxxxx.mongodb.net/?appName=ZerodhaClone"
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://your-frontend-domain.vercel.app

# Deploy
git push heroku main
```

**Backend URL:** `https://zerodha-clone-api.herokuapp.com`

---

### Option B: Deploy to Railway.app

#### 2.1 Setup Railway
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project → Import GitHub repo

#### 2.2 Add MongoDB Service
1. Click **+ Add Service** → **MongoDB**
2. Railway creates MongoDB instance automatically

#### 2.3 Configure Environment Variables
1. Go to **Variables** tab
2. Add:
   ```
   NODE_ENV=production
   MONGO_URL=mongodb+srv://zerodha_user:PASSWORD@cluster0.xxxxx.mongodb.net/?appName=ZerodhaClone
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

3. Deploy automatically on push to main branch

**Backend URL:** Check Railway dashboard for generated URL

---

## 🌐 Step 3: Deploy Frontend to Vercel

### 3.1 Prepare Frontend

#### Update API Configuration
**File:** `frontend/.env.production`
```bash
REACT_APP_API_URL=https://your-backend-api.herokuapp.com
# OR
REACT_APP_API_URL=https://your-backend-api.railway.app
```

**File:** `dashboard/.env.production`
```bash
REACT_APP_API_URL=https://your-backend-api.herokuapp.com
```

### 3.2 Deploy to Vercel

#### Option 1: Via Vercel Dashboard (Easiest)
1. Go to [Vercel](https://vercel.com)
2. Click **Import Project**
3. Select GitHub repo: `Zerodha`
4. **Root Directory:** `frontend`
5. **Build Command:** `npm run build`
6. **Output Directory:** `build`
7. **Environment Variables:**
   ```
   REACT_APP_API_URL=https://your-backend-api.herokuapp.com
   NODE_ENV=production
   ```
8. Click **Deploy**

#### Option 2: Deploy Dashboard Separately
1. Create new Vercel project
2. **Root Directory:** `dashboard`
3. Same environment variables
4. Deploy

#### Option 3: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from frontend folder
cd frontend
vercel --prod --env REACT_APP_API_URL=https://your-backend-api.herokuapp.com
```

### 3.3 Add Custom Domain (Optional)
1. In Vercel: Settings → Domains
2. Add your domain
3. Update DNS records as shown

---

## ✅ Step 4: Verification

### 4.1 Test Backend API
```bash
# Health check
curl https://your-backend-api.herokuapp.com/api/health

# Response should be:
# {"status":"OK","timestamp":"2024-05-03T..."}
```

### 4.2 Test Frontend
1. Visit: `https://zerodha.vercel.app` (or your custom domain)
2. Check console for errors (F12)
3. Navigate to Dashboard → Check if data loads

### 4.3 Test Database Connection
1. In backend logs, should see: `✓ MongoDB connected successfully`
2. Verify at MongoDB Atlas → Browse Collections

---

## 🔒 Security Checklist

- [ ] MongoDB user has **restricted permissions** (read/write only)
- [ ] `.env` files are in `.gitignore` (not committed to GitHub)
- [ ] `MONGO_URL` is kept secret (use Vercel/Heroku environment variables)
- [ ] CORS only allows frontend domains:
  ```
  FRONTEND_URL=https://your-frontend-domain.vercel.app
  ```
- [ ] API returns minimal error info in production
- [ ] All passwords are strong (20+ characters)

---

## 📊 Production Environment Variables

### Backend (.env)
```
NODE_ENV=production
PORT=3002
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/?appName=App
FRONTEND_URL=https://your-domain.vercel.app
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-api.herokuapp.com
NODE_ENV=production
```

---

## 🔧 Maintenance & Monitoring

### Monitor Backend Logs
```bash
# Heroku
heroku logs --tail

# Railway
railway logs
```

### Monitor Database
1. MongoDB Atlas Dashboard
2. Check storage usage
3. Review slow queries

### Update Dependencies
```bash
# Backend
cd backend && npm update && npm audit

# Frontend
cd frontend && npm update && npm audit
```

---

## 🐛 Troubleshooting

### Issue: "Build Failed" on Vercel
**Solution:** Check ESLint errors:
```bash
cd frontend && npm run build
```

### Issue: API 404 Errors
**Solution:** Verify `REACT_APP_API_URL` is correct in `.env.production`

### Issue: MongoDB Connection Timeout
**Solution:** 
1. Check IP whitelist in MongoDB Atlas
2. Verify credentials in `MONGO_URL`
3. Check network connectivity

### Issue: CORS Errors
**Solution:** Ensure `FRONTEND_URL` matches your deployed frontend domain

---

## 📝 Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Backend deployed to Heroku/Railway
- [ ] Backend health check passes
- [ ] Frontend `.env.production` configured
- [ ] Frontend deployed to Vercel
- [ ] API calls working (test via browser)
- [ ] Data loads from database
- [ ] Error logs reviewed
- [ ] Security checklist passed

---

## 🚀 Continuous Deployment

Both Vercel and Heroku support auto-deployment on GitHub pushes:

1. **Vercel:** Auto-deploys on `main` branch push
2. **Heroku:** Auto-deploys with GitHub integration enabled

No manual deployment needed after initial setup!

---

## 📞 Support

For issues:
1. Check deployment logs (Vercel/Heroku dashboard)
2. Verify environment variables
3. Test locally first (`npm start`)
4. Check GitHub Issues section

---

**Last Updated:** May 3, 2026  
**Author:** Zerodha Clone Team
