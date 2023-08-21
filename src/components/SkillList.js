import SkillListItem from "./SkillListItem";

function SkillList({skills}) {
  return (
    // all components must return a single set of tags
    <ul>
        <SkillListItem skill={skills[0]}/>
        <SkillListItem skill={skills[1]}/>
        <SkillListItem skill={skills[2]}/>
        {/* props - an interface for provide data scoped at a parent component to the child component */}
    </ul>
  );

}

// module.exports = SkillList
export default SkillList;
