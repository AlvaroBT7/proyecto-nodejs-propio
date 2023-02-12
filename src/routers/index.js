import express from "express";
import { Router } from "express";
import infoCursos from "../public/json/cursos.js";
import routerProgramming from "./programming.js";
import routerMaths from "./maths.js";
import routerPlumbering from "./plumbering.js";
const router = Router();

router.use(express.json());
router.use("/cursos/programming", routerProgramming);
router.use("/cursos/maths", routerMaths);
router.use("/cursos/plumbering", routerPlumbering);

router.get("/", (req, res) => {
  return res.status(200).render("index.ejs", {
    title: "Welcome back 🙃"
  });
})

router.get("/:cursos", (req, res) => {
  const { cursos } = req.params;
  if (cursos === "cursos") {
    const { sort } = req.query;
    if (Object.keys(req.query).length > 1) res.status(400).end();
    if (sort == "more-views") {
      for (let curso of Object.keys(infoCursos)) {
        infoCursos[curso].sort((a, b) => b.views - a.views);
      }
    }
    else if(sort == "less-views") {
      for (let curso of Object.keys(infoCursos)) {
        infoCursos[curso].sort((a, b) => a.views - b.views);
      }
    }
    else {
      for (let curso of Object.keys(infoCursos)) {
        infoCursos[curso].sort((a, b) => a.id - b.id);
      }
    }
    return res.status(200).json(infoCursos);
  }
  else return res.status(204).end();
});

export default router;