import React, { useState } from "react"; // Importing React from react package and useState, the React hook

// The NewSkillForm function will take the prop onAddSkill and will render a form for adding a new skill and utilize the state to manage the form data with a series of handlers so that when the form is submitted by the user, it calls the NewSkillForm function with the onAddSkill prop to add the new skill to the state

function NewSkillForm({ onAddSkill }) {

    // Using useState hook to define formData and the setFormData function to update the state, as it initializes formData with the object containing the default values for skill and level
    const [formData, setFormData] = useState({
        skill: "",
        level: "1",
    });

    // handleInputeChange is used so that it'll update the state whenever the input fields change, via user
    // Uses the spread operator in setFormData (...formData) to create a new formData object with the updated value for name
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handleSubmit is used to that when triggered, it prevents the default form submission and instead it creates a new newSkill object with values from formData such as skill and level (which is being converted to an integer)
    const handleSubmit = (event) => {
        event.preventDefault();
        const newSkill = { name: formData.skill, level: parseInt(formData.level) };
        onAddSkill(newSkill); // Calls onAddSkill passed as a prop and passing newSkill
        // Sets formData back to default
        setFormData({
            skill: "",
            level: "1",
        });
    };

    // Returning a form with an onSubmit handler that triggers handleSubmit when form is submitted
    // With 2 labels: Skill and Level
    return (
        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <label>Skill</label>

            {/* A required text input element tag with the name assigned to "skill" to identify the input value for the handleInputChange function which is also assigned to the input attribute of onChange, along with a value of formData.skill to bind the skill property input in formData */}
            <input type="text" name="skill" value={formData.skill} onChange={handleInputChange} required />
        
            <label>Level</label>

            {/* A required selector element tag with the name assigned to "level" to identify the selector option input value for the handleInputChange function which is also assigned to the input attribute of onChange, along with a value of formData.level to bind the level property input in formData */}
            <select name="level" value={formData.level} onChange={handleInputChange} required>

                {/* A map function connected to an array of integers from 1 - 5 to iterate each element to create an option element tag for each value and pass level as a prop to assign both the key and value attribute as level, while also nesting level in option */}
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
