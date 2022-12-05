import { Student } from "../../model/types/student";
import {findAllStudents} from "../../model/services/studentServices";
import express from 'express';


async function getStudents(req: express.Request, res: express.Response){
    findAllStudents((err:Error, students:Student[])=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        console.log(typeof(students[0]));
        res.status(200).json(students);
    })
}

export {getStudents};