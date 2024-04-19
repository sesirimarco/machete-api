import { Router } from 'express';

const router = Router();

router.get('/subject'); // all subjects
router.get('/subject/:id'); // one subject
router.post('/subject'); // add a subject
router.put('/subject/:id'); // update subject
router.delete('/subject/:id'); // delete subject

export default router;
