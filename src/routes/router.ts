import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent";
import {getStudents} from '../handlers/student/getStudents';
import {getOneStudent} from '../handlers/student/getOneStudent';
import {deleteStudent} from '../handlers/student/deleteOneStudent';
import { getStudentProfile } from '../handlers/student/getStudentProfile';
import { updateOneStudent } from '../handlers/student/updateOneStudent';
import { getStudentPoints } from '../handlers/student/getStudentPoints';
import { getStudentRewards } from '../handlers/reward/getStudentRewards';


const router = express.Router();

router.get("/editStudentProfile", getStudentProfile);

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);


router.delete("/students", deleteStudent);

router.put("/students/:id_student", updateOneStudent);


router.get("/points", getStudentRewards);



export {router};