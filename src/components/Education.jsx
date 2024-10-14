export default function Education() {
  return (
    <>
      <fieldset>
        <legend>Education</legend>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="school" />
        <label htmlFor="title">Course Title:</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="duration">Duration:</label>
        <input type="text" name="duration" id="duration" />
      </fieldset>
    </>
  );
}
