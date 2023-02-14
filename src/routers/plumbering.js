import { Router } from "express";
import infoCursos from "../public/json/cursos.js";
const { plumbering } = infoCursos;
const router = Router();

router.get("/", (req, res) => res.render("plumbering.ejs", { title: "plumbing" }));
console.log(plumbering);

export default router;