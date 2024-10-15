export default function Education({ obj, onChange }) {
  return (
    <>
      <fieldset>
        <legend>Education</legend>
        <label htmlFor="school">School:</label>
        <input
          onChange={onChange}
          type="text"
          name="school"
          id="school"
          value={obj.school}
        />
        <label htmlFor="title">Course Title:</label>
        <input
          onChange={onChange}
          type="text"
          name="title"
          id="title"
          value={obj.title}
        />
        <label htmlFor="duration">Duration:</label>
        <input
          onChange={onChange}
          type="text"
          name="duration"
          id="duration"
          value={obj.duration}
        />
      </fieldset>
    </>
  );
}
