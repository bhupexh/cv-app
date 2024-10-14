export default function General() {
  return (
    <>
      <fieldset>
        <legend>General Information</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="mail">Email:</label>
        <input type="email" name="mail" id="mail" />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" />
      </fieldset>
    </>
  );
}