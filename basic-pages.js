const { isValidObjectId } = require("mongoose");
const admin = require("../models/admin");
const post = require("../models/posts");
const course = require("../models/course");
const user = require("../models/user");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const accessToken = req?.cookies?.accessToken;
  if (!accessToken) {
    return res.status(302).redirect("/login");
  }
  let options = {
    usercount: 0,
    admincount: 0,
    platinumUserCount: 0,
    bronzeUserCount: 0,
    subscribedUserCount: 0,
  };
  try {
    const date = new Date(`${new Date().getFullYear()}-1-1`).getTime();
    const usercount = await user.countDocuments();
    const admincount = await admin.countDocuments();
    const platinumUserCount = await user.countDocuments({
      plan: "platinum",
      valid: { $gte: date }, // Use $gte for "greater than or equal to"
    });
    const bronzeUserCount = await user.countDocuments({
      plan: "bronze",
      valid: { $gte: date }, // Use $gte for "greater than or equal to"
    });
    const subscribedUserCount = bronzeUserCount + platinumUserCount;
    options = {
      usercount,
      admincount,
      platinumUserCount,
      bronzeUserCount,
      subscribedUserCount,
    };
  } catch (error) {}
  return res.status(200).render("pages/home", options);
});

router.get("/courses", async (req, res) => {
  const accessToken = req?.cookies?.accessToken;
  if (!accessToken) {
    return res.status(302).redirect("/login");
  }
  return res.status(200).render("pages/courses");
});
router.get("/posts", async (req, res) => {
  const accessToken = req?.cookies?.accessToken;
  if (!accessToken) {
    return res.status(302).redirect("/login");
  }
  return res.status(200).render("pages/posts");
});

router.get("/login", async (_, res) => {
  return res.status(200).render("pages/login");
});
router.get("/register", async (_, res) => {
  return res.status(200).render("pages/register");
});

router.get("/posts/:id", async (req, res) => {
  const accessToken = req?.cookies?.accessToken;
  if (!accessToken) {
    return res.status(302).redirect("/login");
  }
  try {
    const _id = req?.params?.id;
    if (!_id || !isValidObjectId(_id)) {
      throw new Error("400 Error | Not a valid ID");
    }
    const data = await post.findOne({ _id });
    if (!data) {
      throw new Error("404 Error | Post Not found!");
    }
    return res.status(200).render("pages/dynamicPosts", data);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error?.message);
  }
});
router.get("/courses/:id", async (req, res) => {
  const accessToken = req?.cookies?.accessToken;
  if (!accessToken) {
    return res.status(302).redirect("/login");
  }
  try {
    const _id = req?.params?.id;
    if (!_id || !isValidObjectId(_id)) {
      console.log(_id);
      throw new Error("400 Error | Not a valid ID");
    }
    const data = await course.findOne({ _id });
    if (!data) {
      throw new Error("404 Error | Course Not found!");
    }
    console.log(data);
    return res.status(200).render("pages/dynamicCourses", { data });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error?.message);
  }
});
router.get("/add-new-course", async (req, res) => {
  const accessToken = req?.cookies?.accessToken;
  if (!accessToken) {
    return res.status(302).redirect("/login");
  }
  try {
    return res.status(200).render("pages/dynamicCourses", { data: {} });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error?.message);
  }
});
module.exports = router;
