// Exporting SkillListItem function with the skill prop to destructure and better define/access the name and level properties from the nested object by returning an li element tag with both name and level being rendered so that the value of both properties will be read

export default function SkillListItem({ skill: { name, level } }){
    return(
        <li className="SkillListItem">{name} <span className='level'>Level {level}</span></li>
    );
};