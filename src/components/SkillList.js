import SkillListItem from "./SkillListItem";

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