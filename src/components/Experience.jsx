export default function Experience({ obj, onChange }) {
  return (
    <>
      <fieldset>
        <legend>Experience</legend>
        <label htmlFor="company">Company Name:</label>
        <input
          onChange={onChange}
          type="text"
          name="company"
          id="company"
          value={obj.company}
        />
        <label htmlFor="position">Position Title:</label>
        <input
          onChange={onChange}
          type="text"
          name="position"
          id="position"
          value={obj.position}
        />
        <label htmlFor="role">Role:</label>
        <input
          onChange={onChange}
          type="text"
          name="role"
          id="role"
          value={obj.role}
        />
        <label htmlFor="from">From:</label>
        <input onChange={onChange} type="date" name="from" id="from" />
        <label htmlFor="to">To:</label>
        <input onChange={onChange} type="date" name="to" id="to" />
      </fieldset>
    </>
  );
}
