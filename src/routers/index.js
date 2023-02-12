import express from "express";
import { Router } from "express";
import infoCursos from "../public/json/cursos.js";
import routerProgramming from "./programming.js";
import routerMaths from "./maths.js";
const router = Router();

router.use(express.json());
router.use("/cursos/programming", routerProgramming);
router.use("/cursos/maths", routerMaths);

router.get("/", (req, res) => {
  return res.status(200).render("index.ejs", {
    title: "Welcome back"
  });
})

router.get("/:cursos", (req, res) => {
  const { cursos } = req.params;
  if (cursos === "cursos") {
    const { sort } = req.query;
    if (sort == "views") {
      for (let curso of Object.keys(infoCursos)) {
        infoCursos[curso].sort((a, b) => b.views - a.views);
      }
    }
    return res.status(200).json(infoCursos);
  }
  else return res.status(204).end();
});

export default router;