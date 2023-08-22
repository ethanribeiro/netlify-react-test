import SkillListItem from "./SkillListItem"; // Importing SkillListItem function components from SkillListItem.js file
// This is used so that SkillListItem function can be referenced and utilized to embed an li tag with the name and level parameter that is being returned by the function

// SkillList is a function with skills as the parameter that will return a ul (unordered list) element tag with a map function connected to skills to iterate through each skill object in the skills array

// For each skill that is mapped/iterated, a SkillListItem component will be rendered and pass the skill as a prop
function SkillList({ skills }) {
  return (
    <ul className="padding-0">
        {skills.map((skill) => (
            <SkillListItem skill={skill}/>
        ))}
    </ul>
  );
}

export default SkillList;