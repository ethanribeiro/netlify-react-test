function NewSkillForm() {
  return (
    // all components must return a single set of tags
    <form method='POST'>
        <label> Skill
          <input type="text" name="skill" required />
        </label>

        <label> Level
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        
        <button type="submit">ADD SKILL</button>
      </form>
  );

}

// module.exports = SkillList
export default NewSkillForm;
