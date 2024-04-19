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
import {
  getAllQuestions,
  getOneQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './handlers/question';

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

router.get('/question', getAllQuestions);
router.get('/exam/:id', getOneQuestion);
router.post('/question', createQuestion);
router.put('/question/:id', updateQuestion);
router.delete('/question/:id', deleteQuestion);

export default router;
