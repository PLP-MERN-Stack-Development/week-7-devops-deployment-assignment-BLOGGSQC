import { useEffect, useState } from 'react';
import axios from 'axios';
import BugList from './components/BugList';
import BugForm from './components/BugForm';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('/api/bugs').then(res => setBugs(res.data));
  }, []);

  const handleNewBug = newBug => {
    setBugs(prev => [newBug, ...prev]);
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm onBugCreated={handleNewBug} />
      <BugList bugs={bugs} />
    </div>
  );
}

export default App;
