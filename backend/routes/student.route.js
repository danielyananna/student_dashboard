const express = require("express");
const router = express.Router();

const { getStudents, getStudent, createStudent, updateStudent, searchStudent } = require("../controllers/student.controller.js");

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.put("/:id", updateStudent);
// router.get("/search", searchStudent);


module.exports = router;