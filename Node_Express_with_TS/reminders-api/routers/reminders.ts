import { Router } from 'express';

const router = Router();

// 1. Create a route that sends a response to the client
router.get('/', (req, res) => {
    res.send('List of reminders');
})

export default router;