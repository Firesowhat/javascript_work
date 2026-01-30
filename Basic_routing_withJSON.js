const express = require("express");
const app = express();

app.get("/api/message", (req, res) => {
  res.json({
    status: "success",
    message: "Hello from the server"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
