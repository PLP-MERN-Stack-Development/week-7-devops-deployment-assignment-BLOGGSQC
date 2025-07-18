import React, { useState } from 'react';
import axios from 'axios';

function BugForm({ onBugCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('/api/bugs', { title, description });
    onBugCreated(response.data);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Bug title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Bug description"
        required
      />
      <button type="submit">Add Bug</button>
    </form>
  );
}

export default BugForm;
