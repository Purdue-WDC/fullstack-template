import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  return res.send({hello: "world"});
});

export default router;
