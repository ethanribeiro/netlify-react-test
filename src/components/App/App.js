import './App.css';
import SkillList from '../SkillList';
import NewSkillForm from '../NewSkillForm';

function App() {

  const skillArray = ["SkillListItem", "SkillListItem", "SkillListItem"]

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skillArray}/>
      <hr />
      <NewSkillForm />
    </div>
  );
}

export default App;
