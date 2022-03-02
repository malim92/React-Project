import React from 'react';
import GoalList from './components/GoalList';


const App = () => {
  const courseGoals = [
    {
      id: 'id1', text: 'goal1'
    },
    {
      id: 'id2', text: 'goal2'
    },
    {
      id: 'id3', text: 'goal3'
    },
  ];

  return (
    <div className="course-goals">
        <h1>Pss React App!</h1>
        <GoalList mygoals= {courseGoals} />
    </div>
  );

};

export default App;
