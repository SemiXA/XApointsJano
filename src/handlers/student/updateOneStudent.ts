import express from 'express';
import { putOneStudent } from '../../model/services/studentServices';
import {Student} from '../../model/types/student';

function updateOneStudent(req: express.Request, res: express.Response){
    const targetStudentId = req.params.id_student;
    const studentDataUpdated: Student = req.body;
    putOneStudent(targetStudentId, studentDataUpdated, (err: Error, result:string)=>{
        if(err){
            res.status(404).json({"message": err.message});
        }
        res.status(200).json(result);
    })

}

export {updateOneStudent};