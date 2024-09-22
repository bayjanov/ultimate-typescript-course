import { Router } from 'express';
import createReminderDto from '../DTOs/create-reminder';
const router = Router();



// 1. Create a route that sends a response to the client
router.get('/', (req, res) => {
    res.send('List of reminders');
})

router.post('/', (req, res) => {
    const {title} = req.body as createReminderDto;
    res.json(title);
})

export default router;