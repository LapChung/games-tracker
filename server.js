const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config.env" });

//Dev Logging while in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/profile", require("./routes/profile"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  );
});
