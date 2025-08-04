const express = require("express");
require("./database/db");
const { Config } = require("./config");
const app = express();
const cors = require("cors");
const UploadRoute = require("./routes/upload");
const port = Config.PORT;
const fileUpload = require("express-fileupload");
const ViewFile = require("./routes/viewfile");
const path = require("path");
const DLFile = require("./routes/dl_file");
const dashboard = require("./routes/dashboard");
const connectDB = require("./database/db");

connectDB();

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/api/upload", UploadRoute);
app.get("/api/view/:id", ViewFile);
app.get("/api/file/:id", DLFile);
app.post("/api/dashboard", dashboard);

app.use(express.static(path.join(__dirname,"..", "frontend", "dist")));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname,"..", "frontend", "dist", "index.html"));
})

app.listen(port, () => {
  console.log(`Server is running on ${Config.BACKEND_DOMAIN}:${port}`);
});