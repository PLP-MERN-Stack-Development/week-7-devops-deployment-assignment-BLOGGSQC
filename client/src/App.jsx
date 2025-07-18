import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm.jsx';
import BugList from './components/BugList.jsx';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const App = () => {
  const [bugs, setBugs] = useState([]);

  // Fetch all bugs
  const fetchBugs = async () => {
    try {
      const res = await fetch(`${API_URL}/bugs`);
      const data = await res.json();
      setBugs(data);
    } catch (error) {
      console.error("Error fetching bugs:", error);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  // Create a bug
  const createBug = async (bug) => {
    try {
      const res = await fetch(`${API_URL}/bugs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bug),
      });
      if (res.ok) {
        fetchBugs();
      }
    } catch (error) {
      console.error("Error creating bug:", error);
    }
  };

  // Update a bug
  const updateBug = async (id, updates) => {
    try {
      const res = await fetch(`${API_URL}/bugs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        fetchBugs();
      }
    } catch (error) {
      console.error("Error updating bug:", error);
    }
  };

  // Delete a bug
  const deleteBug = async (id) => {
    try {
      const res = await fetch(`${API_URL}/bugs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchBugs();
      }
    } catch (error) {
      console.error("Error deleting bug:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🐛 Bug Tracker</h1>
      <BugForm onSubmit={createBug} />
      <BugList bugs={bugs} onUpdate={updateBug} onDelete={deleteBug} />
    </div>
  );
};

export default App;
