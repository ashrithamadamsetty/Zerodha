# 📌 Zerodha Clone – Full Stack Trading & Portfolio Dashboard

This is a **full-stack Zerodha trading platform clone** built using **React, Node.js, Express, and MongoDB**.
The project replicates key Zerodha features such as:

✔ Market watch
✔ Holdings
✔ Positions
✔ Funds
✔ Portfolio dashboard
✔ User interface similar to Zerodha
✔ API-based real data rendering

It is designed for learning **full-stack development, API integration, UI/UX, and MERN architecture**.

---

# 🚀 Features

## 🧩 **Frontend (React - Landing Page)**

* Zerodha-style landing page
* Signup, About, Product, Pricing, Support sections
* `/dashboard` route to access trading dashboard
* Clean UI with Bootstrap & custom CSS

---

## 📊 **Dashboard (React - Trading Workspace)**

Displays data from backend API:

### **Dashboard Modules**

* Holdings table
* Positions table
* Funds page
* Equity summary
* Market symbols (NIFTY, SENSEX)
* Live-style stock cards UI
* Beautiful charts-style placeholders (similar to Zerodha console UI)

### **Pages**

* **/positions** – list of all open positions
* **/holdings** – user's stock holdings
* **/funds** – summary of available margin, used margin, cash
* **/dashboard** – overview screen

---

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


