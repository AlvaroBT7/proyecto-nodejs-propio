import express from "express";
import bodyParser from "body-parser";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import router from "./routers/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// express app settings

// middleware body-parse configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// view engine configuration
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
// routers configuration
app.use("/", router);
// static / public folder confiruguration
app.use("/", express.static(join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is listening at", PORT, "...");
});
