# 📌 Zerodha Clone – Full Stack Trading & Portfolio Dashboard

> **Production-Ready MERN Application** | React + Node.js + Express + MongoDB

![GitHub](https://img.shields.io/badge/GitHub-ashrithamadamsetty%2FZerodha-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Overview

This is a **full-stack Zerodha trading platform clone** built using the **MERN stack** (MongoDB, Express, React, Node.js). 
It replicates key Zerodha features for learning and demonstration purposes.

### Key Features

✅ **Frontend**
- Landing page with multiple sections (Home, About, Products, Pricing, Support)
- Signup integration
- Responsive Bootstrap UI
- Multi-page routing

✅ **Dashboard** 
- Real-time trading dashboard
- Holdings management
- Positions tracking
- Funds display
- Portfolio overview with charts
- Buy/Sell action windows

✅ **Backend API**
- RESTful API with error handling
- MongoDB integration
- CORS enabled for frontend
- Production-ready logging
- Environment-based configuration

---

## 🏗️ Project Structure

```
zerodha_clone/
├── frontend/                 # Landing page (Vercel deployment)
│   ├── public/
│   ├── src/
│   │   └── landing_page/    # Home, About, Products, Pricing, Support
│   ├── package.json
│   └── .env.example
│
├── dashboard/                # Trading dashboard (React)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Holdings, Positions, Orders, Charts
│   │   ├── config/          # API configuration
│   │   └── data/
│   ├── package.json
│   └── .env.example
│
├── backend/                  # Express API server
│   ├── model/               # MongoDB models
│   ├── schemas/             # MongoDB schemas
│   ├── index.js             # Main server file
│   ├── package.json
│   ├── .env.example
│   ├── Procfile             # For Heroku deployment
│   └── .env                 # Local configuration (DO NOT COMMIT)
│
├── DEPLOYMENT.md            # Complete deployment guide
├── vercel.json             # Vercel configuration
└── .vercelignore           # Files to ignore on Vercel
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 14+
- npm or yarn
- MongoDB Atlas account (free M0 tier)
- Git

### 1️⃣ Clone & Setup

```bash
# Clone repository
git clone https://github.com/ashrithamadamsetty/Zerodha.git
cd Zerodha

# Install backend dependencies
cd backend
npm install
cp .env.example .env

# Install frontend dependencies
cd ../frontend
npm install
cp .env.example .env

# Install dashboard dependencies
cd ../dashboard
npm install
cp .env.example .env
```

### 2️⃣ Configure Environment Variables

**backend/.env**
```
NODE_ENV=development
PORT=3002
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?appName=ZerodhaClone
FRONTEND_URL=http://localhost:3000
```

**frontend/.env**
```
REACT_APP_API_URL=http://localhost:3002
```

**dashboard/.env**
```
REACT_APP_API_URL=http://localhost:3002
```

### 3️⃣ Start Development Servers

**Terminal 1: Backend**
```bash
cd backend
npm start
# Runs on http://localhost:3002
```

**Terminal 2: Frontend**
```bash
cd frontend
npm start
# Runs on http://localhost:3000
```

**Terminal 3: Dashboard**
```bash
cd dashboard
npm start
# Runs on http://localhost:3001
```

---

## 📊 API Endpoints

### Health Check
```
GET /api/health
Response: { status: "OK", timestamp: "..." }
```

### Holdings Management
```
GET  /allholdings        → Fetch all holdings
GET  /addHoldings        → Seed sample holdings to DB
```

### Positions Management
```
GET  /allPositions       → Fetch all positions
GET  /addPositions       → Seed sample positions to DB
```

### Orders Management
```
POST /newOrder           → Place new order
Body: { name, qty, price, mode }
```

---

## 🛠️ API Response Format

### Success Response
```json
{
  "status": "success",
  "data": [...],
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

---

## 🌐 Production Deployment

### Frontend Deployment (Vercel)
1. Connect GitHub repo to Vercel
2. Set root directory to `frontend`
3. Add environment variable: `REACT_APP_API_URL=<backend-url>`
4. Deploy

### Backend Deployment (Heroku/Railway)
1. Set up MongoDB Atlas cluster
2. Configure environment variables
3. Deploy using Git or CLI

**👉 [Complete Deployment Guide →](DEPLOYMENT.md)**

---

## 📁 Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Frontend | React | 19.1.1 |
| Dashboard UI | Material-UI | 5.15.11 |
| Routing | React Router DOM | 7.9.3 |
| HTTP Client | Axios | 1.12.2 |
| Backend | Express.js | 5.1.0 |
| Database | MongoDB | 6.20.0 |
| ORM | Mongoose | 8.19.1 |
| Auth | Passport.js | 0.7.0 |
| CSS Framework | Bootstrap | 5.3.8 |
| Icons | Font Awesome | 4.7.0 |
| Charts | Chart.js | 4.5.1 |

---

## 🔐 Security Best Practices

✅ **Implemented**
- Environment variables for sensitive data
- CORS configuration for frontend domains
- Input validation on POST endpoints
- Error handling middleware
- MongoDB credentials in `.env` (not in code)
- Graceful shutdown handling

✅ **Recommended for Production**
- Add authentication (JWT/Passport)
- Enable HTTPS only
- Rate limiting on API endpoints
- Database backups (automated)
- Request logging & monitoring
- SQL injection prevention (already handled by Mongoose)

---

## 📈 Performance Optimization

✅ **Frontend**
- Code splitting via React lazy loading
- CSS minification with build process
- CDN for static assets
- Vercel edge caching

✅ **Backend**
- Mongoose indexing on frequently queried fields
- Connection pooling
- Error handling to prevent crashes
- Response caching headers

---

## 🐛 Common Issues & Solutions

### Issue: "CORS Error" when calling API
**Solution:** Verify `FRONTEND_URL` in backend `.env` matches your frontend URL

### Issue: "Cannot GET /newOrder"
**Solution:** Check that request method is POST, not GET

### Issue: "MongoDB connection failed"
**Solution:** 
1. Verify `MONGO_URL` in `.env`
2. Check MongoDB Atlas IP whitelist
3. Ensure cluster is initialized

### Issue: "Build failed" on Vercel
**Solution:** Run `npm run build` locally first to identify issues

---

## 📚 Learning Resources

- [MERN Stack Guide](https://www.mongodb.com/languages/mern-stack)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)
- [Vercel Deployment](https://vercel.com/docs)

---

## 👥 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙋 Support

For issues, questions, or suggestions:
- Open a GitHub Issue
- Check existing documentation
- Review deployment guide

---

## 📞 Contact

**Author:** Ashritha Madamsetty  
**GitHub:** [@ashrithamadamsetty](https://github.com/ashrithamadamsetty)  
**Email:** Open GitHub Issues for support

---

## 📊 Project Status

- ✅ Frontend: Production Ready
- ✅ Dashboard: Production Ready  
- ✅ Backend API: Production Ready
- ✅ Database: Configured
- ✅ Deployment: Documented

**Last Updated:** May 3, 2026  
**Version:** 1.0.0

## 🛠️ **Backend (Node.js + Express)**

* REST APIs to fetch:

  * Holdings
  * Positions
  * Funds
  * Equity values
* MongoDB database connection
* Example API:

```
GET http://localhost:5000/allHoldings
```

* Returns full holdings array (as seen in your screenshot)

---

## 🧠 Tech Stack

### **Frontend**

* React JS
* React Router
* Bootstrap 5
* CSS3

### **Dashboard**

* React JS
* Axios
* Custom UI components

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon

---

## 📁 Folder Structure

```
ZERODHA/
│── zerodha_clone/
│   ├── frontend/       # Landing page (React)
│   ├── dashboard/      # Trading dashboard (React)
│   ├── backend/        # Node.js + Express API
│   ├── .gitignore
│   ├── README.md
```

---

# ▶️ How to Run the Project

## 1️⃣ **Start Backend**

```
cd backend
npm install
npm start
```

Backend will run at:

```
http://localhost:5000
```

---

## 2️⃣ **Start Dashboard**

```
cd dashboard
npm install
npm start
```

Runs at:

```
http://localhost:3001
```

(Or the next free port)

---

## 3️⃣ **Start Frontend**

```
cd frontend
npm install
npm start
```

Frontend landing page runs at:

```
http://localhost:3000
```

---

# 🌐 API Example

### Get Holdings

```
GET http://localhost:5000/allHoldings
```

### Sample Response

```json
[
  { "name": "BHARTIARTL", "qty": 5, "avg": 538.05, "price": 541.15, "net": "+0.58%" },
  { "name": "HDFCBANK", "qty": 5, "avg": 1383.40, "price": 1522.35, "net": "+10.04%" }
]
```

---

# 📸 Screenshots

## ✔ Dashboard Positions Page

*(Insert your screenshot here)*

## ✔ Dashboard Funds Page

*(Insert screenshot)*

## ✔ Holdings API Data

*(Insert screenshot of JSON response)*

## ✔ Landing Page

*(Insert screenshot)*

---

# 🎯 Purpose of the Project

* Learn MERN full-stack development
* Build a real-world complex dashboard UI
* Understand API integration & database handling
* Prepare a strong industry-level portfolio project

---

# 🤝 Author

**Ashritha**
B.Tech CSE (AI)
Full Stack Developer | MERN | Cloud | UI/UX

---


