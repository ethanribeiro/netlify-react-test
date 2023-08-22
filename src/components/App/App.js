import React, { useState } from 'react'; // Importing React from react package and useState, the React hook
import SkillList from '../SkillList'; // Importing SkillList function components from SkillList.js file
import NewSkillForm from '../NewSkillForm'; // Importing NewSkillForm function components from NewSkillForm.js file
// Importing css stylesheet files
import './App.css';
import '../SkillListItem.css';
import '../NewSkillForm.css';

function App() { 

  // Initializing State with useState hook to define skills and the corresponding setSkills function to update the state
  // Initializing skills with an array of skill objects containing 2 properties: name & level
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  //addSkill is used to add a new skill to the skills state array. Using the setSkills function to update the state by creating a new array with the existing skills and new skill
  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <div className="App">
      <h1 className='teal-text'>React Dev Skills</h1> {/* h1 Title */}

      {/* Rendering and passing the skills array as a prop. Listing 4 separate skills with their corresponding name and level */}
      <SkillList skills={skills}/>
      <hr />
      
      {/* Rendering and passing the addSkill function as a prop. Rendering a form for the user to input the name and level of the new skill and submitting to add the newly created skill */}
      <NewSkillForm onAddSkill={addSkill}/>
    </div>
  );
}

export default App;
