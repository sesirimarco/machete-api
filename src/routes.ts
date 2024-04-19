import { Router } from 'express';
import { body, validationResult } from 'express-validator';
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

const errorHandlerInputs = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
    return;
  } else {
    next();
  }
};

router.get('/subject', getAllSubjects); // all subjects
router.get('/subject/:id', getOneSubject); // one subject
router.post(
  '/subject',
  [
    body('code').isInt(),
    body('name').isString(),
    body('description').optional().isString(),
    errorHandlerInputs,
  ],
  createSubject
); // add a subject
router.put(
  '/subject/:id',
  [
    body('code').isInt(),
    body('name').isString(),
    body('description').optional().isString(),
    errorHandlerInputs,
  ],
  updateSubject
); // update subject
router.delete('/subject/:id', deleteSubject); // delete subject

router.get('/exam', getAllExams);
router.get('/exam/:id', getOneExam);
router.post(
  '/exam',
  [
    body('title').isString(),
    body('type').isString(),
    body('description').optional().isString(),
    body('subjectId').optional().isString(),
    errorHandlerInputs,
  ],
  createExam
);
router.put(
  '/exam/:id',
  [
    body('title').isString(),
    body('type').isString(),
    body('description').optional().isString(),
    body('subjectId').optional().isString(),
    errorHandlerInputs,
  ],
  updateExam
);
router.delete('/exam/:id', deleteExam);

router.get('/question', getAllQuestions);
router.get('/exam/:id', getOneQuestion);
router.post(
  '/question',
  [
    body('order').isInt(),
    body('title').isString(),
    body('answer').isString(),
    body('examId').isString(),
    errorHandlerInputs,
  ],
  createQuestion
);
router.put('/question/:id',[
  body('order').optional().isInt(),
  body('title').optional().isString(),
  body('answer').optional().isString(),
  body('examId').optional().isString(),
  errorHandlerInputs,
], updateQuestion);
router.delete('/question/:id', deleteQuestion);

export default router;
