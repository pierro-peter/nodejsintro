const mongoose = require('mongoose');


// Schema for a dashboard
const dashboardSchema = new mongoose.Schema({
  totalStock: { type: Number, default: 0 },  // Total stock count
  lowStockAlerts: { type: Number, default: 0 },  // Number of low stock alerts
  totalSales: { type: Number, default: 0 },  // Total sales amount
  todaysSales: { type: Number, default: 0 },  // Sales amount for today
  pendingCredit: { type: Number, default: 0 },  // Amount of pending credit
  updatedAt: { type: Date, default: Date.now }  // Last updated timestamp
});

// Model for dashboard
module.exports = mongoose.model('Dashboard', dashboardSchema);
