import { Router } from "express";
import infoCursos from "../public/json/cursos.js";
const { maths } = infoCursos;
const router = Router();

const buildObjArr = arr => {
  let result = "";
  for (let item of arr) {
    result += `id: ${item.id}, theme: ${item.language}, levle: ${item.level}, title: ${item.title}, views: ${item.views}`;
  }
  return result;
}

router.get("/", (req, res) => res.render("maths.ejs", { maths: buildObjArr(maths) }));

export default router;