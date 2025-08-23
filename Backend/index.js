import express from "express";
import cookieParser from "cookie-parser";
import { taskRouter } from "./routes/index.js";
import { connectToDb } from "./utils/Db/connectToDb.js";

const app = express();

const PORT = 7777;

app.use(express.json());
app.use(cookieParser());

app.use("/tasks", taskRouter);

(async function () {
  try {
    await connectToDb();
    app.listen(PORT, () => console.log(`Server is started on port:${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
