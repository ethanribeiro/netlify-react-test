import React, { useState } from "react";

function NewSkillForm({ onAddSkill }) {
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState("1");

    const handleSkillChange = (event) => {
        setSkill(event.target.value);
    };

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSkill = { name: skill, level: parseInt(level) };
        onAddSkill(newSkill);
        setSkill("");
        setLevel("1");
    };

    return (
        // all components must return a single set of tags
        <form onSubmit={handleSubmit}>
            <label> Skill
                <input type="text" name="skill" value={skill} onChange={handleSkillChange} required />
            </label>

            <label> Level
                <select value={level} onChange={handleLevelChange} required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
        
            <button type="submit">ADD SKILL</button>
      </form>
    );

}

export default NewSkillForm;
