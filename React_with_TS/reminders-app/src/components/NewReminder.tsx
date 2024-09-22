import React, { useState } from "react";

function NewReminder(): JSX.Element {
    const [ title, setTitle] = useState('');

  return (
    <form>
      <label htmlFor="title"></label>
      <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control" />
      <button type="submit" className="btn btn-primary rounded-pill my-3">Add Reminder</button>
    </form>
  );
}

export default NewReminder;
