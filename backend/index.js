// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001; // 好きなポート番号に変更可

app.use(cors()); // CORSミドルウェアを追加
// JSONボディを扱いたい場合
app.use(express.json());

// サンプルのGETルート
app.get("/", (req, res) => {
  res.send("Hello from Express!");
  res.send("みさみさ");
});

// サンプルのPOSTルート
app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  console.log("Received:", receivedData);
  res.json({ message: "Data received successfully", data: receivedData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
