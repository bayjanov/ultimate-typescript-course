import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
 

const reminders: Reminder[] = [
  { id: 1, title: 'Buy Milk' },
  { id: 2, title: 'Call Mom' },
  { id: 3, title: 'Send Report' }
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
