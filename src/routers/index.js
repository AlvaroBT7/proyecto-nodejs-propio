import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    return res.status(200).render("./index.ejs");
  });
  
router.post("/", (req, res) => {
  return res.status(200).send("hola");
});

export default router;