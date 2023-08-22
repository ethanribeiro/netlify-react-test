import SkillListItem from "./SkillListItem";

function SkillList({ skills }) {
  return (
    // all components must return a single set of tags
    <ul className="padding-0">
        {skills.map((skill, index) => (
            <SkillListItem key={index} skill={skill}/>
        ))}
        {/* props - an interface for provide data scoped at a parent component to the child component */}
    </ul>
  );

}

// module.exports = SkillList
export default SkillList;
