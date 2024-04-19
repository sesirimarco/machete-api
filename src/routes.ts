import { Router } from 'express';
import {
  getAllSubjects,
  getOneSubject,
  createSubject,
  updateSubject,
} from './handlers/subject';

const router = Router();

router.get('/subject', getAllSubjects); // all subjects
router.get('/subject/:id', getOneSubject); // one subject
router.post('/subject', createSubject); // add a subject
router.put('/subject/:id', updateSubject); // update subject
router.delete('/subject/:id'); // delete subject

export default router;
