const mongoose = require('mongoose');

const salesAgentSchema = new mongoose.Schema({
  user: { type: mongoose.
    Schema.Types.ObjectId, ref: 'User' },
  region: { type: String, required: true },
  salesTargets: { type: Number, default: 0 },
  totalSales: { type: Number, default: 0 }
});

module.exports = mongoose.model('SalesAgent', salesAgentSchema);