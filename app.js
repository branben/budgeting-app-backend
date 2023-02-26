const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const transactions = [
  {
    item_name: "income",
    amount: 100,
    date: "June 12",
    from: "pet store",
    category: "income",
  },
];

app.get("/transactions", (req, res) => {
  res.json(transactions);
});

app.post("/transactions", (req, res) => {
  const values = req.body;
  transactions.push(values);
  res.status(200).send("");
});

app.get("/transactions/:id", (req, res) => {
  const { id } = req.params;
  const singleTransaction = transactions[id];
  res.json(singleTransaction);
});

app.put("/transactions/:id", (req, res) => {
  const { id } = req.params;
  const newTransaction = req.body;
  transactions[id] = newTransaction;
  res.status(200).send("");
});

app.delete("/transactions/:id", (req, res) => {
  const { id } = req.params;
  transactions.splice(id, 1);
  res.status(200).send("");
});

module.exports = app;
