const basicRequest = require("../main_modules/BasicRequests");
const { adminMiddleware } = require("../main_modules/Middlewares");
const course = require("../models/course");

const router = require("express").Router();
router.get("/get-courses", adminMiddleware, async (req, res) => {
  if (!req?.userDetail) {
    return res.status(401).json({ message });
  }
  const response = await basicRequest.pagination(req, res, course);
  return response;
})

module.exports = router;