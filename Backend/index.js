import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { taskRouter, userRouter } from "./routes/index.js";
import { connectToDb } from "./utils/Db/connectToDb.js";

const app = express();

const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/tasks", taskRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.statusCode,
    message: err.message || "Internal Server Error",
  });
});

(async function () {
  try {
    await connectToDb();
    app.listen(PORT, () => console.log(`Server is started on port:${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
