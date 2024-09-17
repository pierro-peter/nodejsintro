const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stock', stockSchema);