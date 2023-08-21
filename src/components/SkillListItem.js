
export default function SkillListItem({ skill }){
    console.log("testing props", skill);
    return(<li>{skill.name} {skill.level}</li>);
}