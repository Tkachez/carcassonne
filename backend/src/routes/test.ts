import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => console.log(111))

export default router;