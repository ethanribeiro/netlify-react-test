// import React from 'react';
import "./SkillListItem.css";

export default function SkillListItem({ skill }){
    console.log("testing props", skill);
    return(<li className="SkillListItem">{skill.name} <span className='level'>Level {skill.level}</span></li>);
}