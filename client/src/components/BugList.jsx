import React from 'react';

function BugList({ bugs }) {
  return (
    <div>
      {bugs.map(bug => (
        <div key={bug._id} className="bug">
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <span>Status: {bug.status}</span>
        </div>
      ))}
    </div>
  );
}

export default BugList;
