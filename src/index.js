import express from "express";
import routers from "./routers/index.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// getting dynamic path location
const __dirname = dirname(fileURLToPath(import.meta.url));

// app settings
const app = express();
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", routers);
app.use("/", express.static(join(__dirname, "public")));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is listening at", PORT, "...");
});