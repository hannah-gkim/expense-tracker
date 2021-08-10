// Get all transactions
// GET /api/transactions
// Access Public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// Add transactions
// POST /api/transactions
// Access Public
exports.addTransactions = (req, res, next) => {
    res.send("POST transaction");
  };

  
// DELETE transactions
// DELETE /api/transactions/:id
// Access Public
exports.deleteTransactions = (req, res, next) => {
    res.send("Delete transactions");
  };
  