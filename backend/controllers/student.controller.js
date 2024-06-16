const Student = require("../models/student.model.js");

const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudent = async(req, res)=>{
    try {
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
   } catch (error) {
        res.status(500).json({ message: error.message });
   }
 }

 const createStudent = async(req, res)=>{
    try {
     const student = await Student.create(req.body);
     res.status(200).json(student);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 }

 const updateStudent = async(req, res)=>{
   try {
       const {id} = req.params;
       const student = await Student.findByIdAndUpdate(id, req.body);
       if(!student){
           res.status(404).json({message: 'Student not found'});
       }
       const updatedStudent = await Student.findById(id);
       res.status(200).json(updatedStudent);
  } catch (error) {
       res.status(500).json({ message: error.message });
  }
}

// const searchStudent = async (req, res) => {
//     const firstNameQuery = req.query.firstName;
//     const fullNameQuery = req.query.fullName;
//
//     try {
//         let query = {};
//
//         if (firstNameQuery) {
//             query.name = { $regex: new RegExp(firstNameQuery, 'i') };
//         }
//
//         if (fullNameQuery) {
//             query.$or = [
//                 { name: { $regex: new RegExp(fullNameQuery, 'i') } },
//                 { surname: { $regex: new RegExp(fullNameQuery, 'i') } }
//             ];
//         }
//
//         const students = await Student.find(query);
//
//         res.json(students);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    // searchStudent,
}