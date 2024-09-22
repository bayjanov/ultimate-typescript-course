import React from 'react';
import Reminder from '../models/reminder';


interface ReminderListProps {
    items: Reminder[];
}

function ReminderList({items}: ReminderListProps) {
    return (
        <div>
            <ul className='list-group'>
                {items.map( item => <li className='list-group-item' key={item.id}>{item.title}</li> )}
            </ul>
        </div>
    );
}

export default ReminderList;