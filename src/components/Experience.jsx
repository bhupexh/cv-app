export default function Experience() {
  return (
    <>
      <fieldset>
        <legend>Experience</legend>
        <label htmlFor="company">Company Name:</label>
        <input type="text" name="company" id="company" />
        <label htmlFor="position">Position Title:</label>
        <input type="text" name="position" id="position" />
        <label htmlFor="role">Role:</label>
        <input type="text" name="role" id="role" />
        <label htmlFor="from">From:</label>
        <input type="date" name="from" id="from"/>
        <label htmlFor="to">To:</label>
        <input type="date" name="to" id="to"/>
      </fieldset>
    </>
  );
}
