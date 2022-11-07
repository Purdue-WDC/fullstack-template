import express from "express";
const router = express.Router();

console.log(process.env.MONGODB_URL);

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {title: "Express"});
});

export default router;
