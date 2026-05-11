import { styles } from "../styles.jsx";
export default function ExperienceForm({ entry, handleOtherDataChange }) {

  return (
    <>
    <form className={styles.formWrapper}>
      <label htmlFor="title">Title</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="title"
        name="title"
        value={entry.title}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="company">Company</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="company"
        name="company"
        value={entry.company}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="city">City</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="city"
        name="city"
        value={entry.city}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="startDate"
        name="startDate"
        value={entry.startDate}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="endDate">End Date</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="endDate"
        name="endDate"
        value={entry.endDate}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        className={styles.inputStyle}
        id="description"
        name="description"
        value={entry.description}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />
    </form>
    </>
  );
}