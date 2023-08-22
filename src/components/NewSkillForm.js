import React, { useState } from "react";

function NewSkillForm({ onAddSkill }) {
    const [formData, setFormData] = useState({
        skill: "",
        level: "1",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSkill = { name: formData.skill, level: parseInt(formData.level) };
        onAddSkill(newSkill);
        setFormData({
            skill: "",
            level: "1",
        });
    };

    return (
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label>Skill</label>
            <input type="text" name="skill" value={formData.skill} onChange={handleInputChange} required />
        
            <label>Level</label>
            <select name="level" value={formData.level} onChange={handleInputChange} required>
                {[1, 2, 3, 4, 5].map((level) => (
                    <option key={level} value={level}>
                        {level}
                    </option>
                ))}
            </select>
        
            <button type="submit">ADD SKILL</button>
      </form>
    );
}

export default NewSkillForm;
