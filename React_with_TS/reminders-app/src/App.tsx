import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder.service";
import { log } from "console";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders =  await reminderService.getReminders();
    setReminders(reminders);
  }

  const removeReminder =  (id: number) => {
    // reminderService.removeReminder(id);
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  return (
    <div className="App">
      <NewReminder />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
