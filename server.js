import express from "express";
const app = express();

import notFoundMiddleware from "./middleware/NotFound.js";
import errorHandlerMiddleware from "./middleware/ErrorHandler.js";

app.get("/", (req, res) => {
  res.send("init");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening on port ${port}...`));
