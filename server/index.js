/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

const express = require("express");
const path = require("path");

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve("./dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
