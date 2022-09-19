const connecttoMongo = require("./db");
const express = require("express");

connecttoMongo();

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`inotebook backend http://localhost:${port}`);
});
