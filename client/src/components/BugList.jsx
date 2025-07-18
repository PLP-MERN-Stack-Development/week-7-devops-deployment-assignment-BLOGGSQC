import React, { useState } from 'react';

const BugList = ({ bugs, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEdit = (bug) => {
    setEditingId(bug._id);
    setEditTitle(bug.title);
    setEditDescription(bug.description);
  };

  const handleUpdate = (id) => {
    onUpdate(id, { title: editTitle, description: editDescription });
    setEditingId(null);
  };

  return (
    <div>
      {bugs.map((bug) => (
        <div key={bug._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '0.5rem' }}>
          {editingId === bug._id ? (
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{ marginRight: '0.5rem' }}
              />
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                style={{ marginRight: '0.5rem' }}
              />
              <button onClick={() => handleUpdate(bug._id)} style={{ marginRight: '0.5rem' }}>
                Save
              </button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{bug.title}</h3>
              <p>{bug.description}</p>
              <button onClick={() => handleEdit(bug)} style={{ marginRight: '0.5rem' }}>
                Edit
              </button>
              <button onClick={() => onDelete(bug._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BugList;
