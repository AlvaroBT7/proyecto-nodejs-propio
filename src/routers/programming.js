import express from "express";
import { Router } from "express";
import infoCursos from "../public/json/cursos.js";
const programming = infoCursos.programming;
const router = Router();

const buildObjArr = arr => {
  let result = "";
  for (let item of arr) {
    result += `id: ${item.id}, language: ${item.language}, levle: ${item.level}, title: ${item.title}, views: ${item.views}`;
  }
  return result;
}

router.get("/", (req, res) => res.render("programming.ejs", { programming: buildObjArr(programming) }));

export default router;