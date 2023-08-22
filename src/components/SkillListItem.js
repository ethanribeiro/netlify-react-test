export default function SkillListItem({ skill: { name, level } }){
    return(
        <li className="SkillListItem">{name} <span className='level'>Level {level}</span></li>
    );
};