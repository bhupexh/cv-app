export default function General({ obj, onChange }) {
  return (
    <>
      <fieldset>
        <legend>General Information</legend>
        <label htmlFor="name">Name:</label>
        <input
          onChange={onChange}
          type="text"
          name="name"
          id="name"
          value={obj.name}
        />
        <label htmlFor="mail">Email:</label>
        <input
          onChange={onChange}
          type="email"
          name="mail"
          id="mail"
          value={obj.mail}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          onChange={onChange}
          type="tel"
          name="phone"
          id="phone"
          value={obj.phone}
        />
      </fieldset>
    </>
  );
}
