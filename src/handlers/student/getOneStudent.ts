import express from 'express';
import { Student } from '../../model/types/student';
import {findOneStudent} from '../../model/services/studentServices';

async function getOneStudent(req: express.Request, res: express.Response){
     try {
        const studentId = "1;"
        const studentFound = await findOneStudent(studentId);
        return res.status(200).send(studentFound)
        {
        }
        
     } catch (error) {
        return res.status(404).json({ "message": "not found" }); 
     }
    }

export {getOneStudent};