import { Router } from 'express';
import createReminderDto from '../DTOs/create-reminder';
import ReminderModel from '../models/reminder.model';
const router = Router();

const reminders: ReminderModel[] = [];

// 1. Create a route that sends a response to the client
router.get('/', (req, res) => {
    res.json(reminders);
})

router.post('/', (req, res) => {
    const {title} = req.body as createReminderDto;
    const reminder = new ReminderModel(title);
    reminders.push(reminder);
    res.status(201).json(title);
})

export default router;