require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();

// Validate environment variables
if (!uri) {
  console.error('ERROR: MONGO_URL is not defined in .env file');
  process.exit(1);
}

// CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Zerodha Backend Running 🚀");
});
// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});
app.get('/addHoldings', async(req, res) => {
  try {
    let tempHoldings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.4,
    price: 1522.35,
    net: "+10.04%",
    day: "+0.11%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.3,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  },
];
  tempHoldings.forEach((item)=>{
     let newHolding=new HoldingsModel({
      name:item.name,
      qty:item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
     });
     newHolding.save();
  });
  res.status(200).json({ message: 'Holdings added successfully', status: 'success' });
  } catch(error) {
    console.error('Error in /addHoldings:', error);
    res.status(500).json({ message: 'Error adding holdings', error: error.message, status: 'error' });
  }
});



app.get('/addPositions', async(req, res) => {
  try {
    let tempPositions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
]
  tempPositions.forEach((item)=>{
     let newPosition=new PositionsModel({
      product:item.product,
      name:item.name,
      qty:item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
     });
     newPosition.save();
  });
  res.status(200).json({ message: 'Positions added successfully', status: 'success' });
  } catch(error) {
    console.error('Error in /addPositions:', error);
    res.status(500).json({ message: 'Error adding positions', error: error.message, status: 'error' });
  }
});


app.get("/allholdings", async(req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.status(200).json({ status: 'success', data: allHoldings });
  } catch(error) {
    console.error('Error in /allholdings:', error);
    res.status(500).json({ message: 'Error fetching holdings', error: error.message, status: 'error' });
  }
});
app.get("/allPositions", async(req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.status(200).json({ status: 'success', data: allPositions });
  } catch(error) {
    console.error('Error in /allPositions:', error);
    res.status(500).json({ message: 'Error fetching positions', error: error.message, status: 'error' });
  }
});

app.post("/newOrder", async(req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    
    // Validate required fields
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, qty, price, mode', 
        status: 'error' 
      });
    }
    
    let newOrder = new OrdersModel({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });
    
    await newOrder.save();
    res.status(201).json({ 
      message: 'Order placed successfully', 
      status: 'success',
      orderId: newOrder._id 
    });
  } catch(error) {
    console.error('Error in /newOrder:', error);
    res.status(500).json({ 
      message: 'Error placing order', 
      error: error.message, 
      status: 'error' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    message: 'Internal server error', 
    status: 'error',
    error: process.env.NODE_ENV === 'production' ? {} : err.message 
  });
});

// Connect to MongoDB and start server
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`);
    console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection failed:', err.message);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  mongoose.connection.close();
  console.log('Server shutting down...');
  process.exit(0);
});