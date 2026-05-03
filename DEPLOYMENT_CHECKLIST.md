# 🚀 PRODUCTION DEPLOYMENT CHECKLIST

## Pre-Deployment

- [ ] All code committed to GitHub (`main` branch)
- [ ] `.env` files created locally with correct values
- [ ] `.env` files are NOT committed to repository
- [ ] `.env.example` files document all required variables
- [ ] All dependencies installed locally: `npm install`
- [ ] Build succeeds locally: `npm run build`
- [ ] No console errors in local testing
- [ ] API endpoints tested with Postman/curl

## Database Setup

- [ ] MongoDB Atlas account created
- [ ] Free M0 cluster deployed
- [ ] Database user created with strong password
- [ ] Network whitelist configured (allow all for testing)
- [ ] Connection string verified
- [ ] MONGO_URL stored in `.env` (backend)

## Backend Deployment (Choose One)

### Heroku Deployment
- [ ] Heroku account created
- [ ] Heroku CLI installed
- [ ] `Procfile` created with `web: node index.js`
- [ ] `heroku create zerodha-clone-api` executed
- [ ] Environment variables set via `heroku config:set`
- [ ] `git push heroku main` completed
- [ ] Backend logs verified: `heroku logs --tail`
- [ ] Health check passes: `curl https://zerodha-clone-api.herokuapp.com/api/health`

### Railway Deployment
- [ ] Railway.app account created
- [ ] GitHub repo imported to Railway
- [ ] MongoDB service added
- [ ] Environment variables configured
- [ ] Deployment triggered
- [ ] Health check endpoint verified

## Frontend Deployment (Vercel)

- [ ] Vercel account created
- [ ] GitHub repo connected to Vercel
- [ ] Root directory set to `frontend`
- [ ] `REACT_APP_API_URL` environment variable added
- [ ] Build command: `npm run build`
- [ ] Output directory: `build`
- [ ] Deployment triggered
- [ ] Frontend loads without errors
- [ ] API calls working in browser console

## Dashboard Deployment (Optional)

- [ ] Vercel project created for dashboard
- [ ] Root directory set to `dashboard`
- [ ] `REACT_APP_API_URL` environment variable added
- [ ] Deployment successful
- [ ] Data displays correctly from backend

## Post-Deployment Testing

- [ ] Frontend loads: https://zerodha.vercel.app
- [ ] Dashboard accessible
- [ ] API health check passes
- [ ] Holdings data loads from MongoDB
- [ ] Positions data loads from MongoDB
- [ ] New orders can be placed
- [ ] No 404 or CORS errors in browser console
- [ ] Page performance acceptable
- [ ] Mobile responsiveness verified

## Security & Monitoring

- [ ] MongoDB credentials kept secret
- [ ] FRONTEND_URL matches deployed domain
- [ ] API errors don't expose sensitive info
- [ ] CORS whitelist includes only frontend domains
- [ ] `.env` file in `.gitignore`
- [ ] No hardcoded secrets in code
- [ ] Vercel logs monitored for errors
- [ ] Backend logs monitored for errors

## Post-Launch

- [ ] Update DNS records if using custom domain
- [ ] Enable auto-scaling if available
- [ ] Set up monitoring alerts
- [ ] Document deployed URLs
- [ ] Share deployment URLs with team
- [ ] Schedule regular backups
- [ ] Plan database maintenance schedule
- [ ] Monitor API response times
- [ ] Review error logs weekly

## Rollback Plan (If Issues)

- [ ] Have GitHub commit SHA for rollback
- [ ] Know how to revert deployment on Vercel
- [ ] Have backup of database
- [ ] Know how to redeploy backend quickly

---

## Deployment URLs

| Component | URL | Status |
|-----------|-----|--------|
| Frontend (Vercel) | https://zerodha.vercel.app | ⏳ Pending |
| Dashboard | https://zerodha-dashboard.vercel.app | ⏳ Pending |
| Backend API (Heroku) | https://zerodha-clone-api.herokuapp.com | ⏳ Pending |
| MongoDB Atlas | [Dashboard Link] | ✅ Configured |

---

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Notes:** _______________

