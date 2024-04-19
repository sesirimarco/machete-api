import { Router } from 'express';
import {
  getAllSubjects,
  getOneSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} from './handlers/subject';

import {
  getAllExams,
  getOneExam,
  createExam,
  updateExam,
  deleteExam,
} from './handlers/exam';

const router = Router();

router.get('/subject', getAllSubjects); // all subjects
router.get('/subject/:id', getOneSubject); // one subject
router.post('/subject', createSubject); // add a subject
router.put('/subject/:id', updateSubject); // update subject
router.delete('/subject/:id', deleteSubject); // delete subject

router.get('/exam', getAllExams);
router.get('/exam/:id', getOneExam);
router.post('/exam', createExam);
router.put('/exam/:id', updateExam);
router.delete('/exam/:id', deleteExam);

export default router;
