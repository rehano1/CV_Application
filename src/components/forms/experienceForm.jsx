import { styles } from "../styles.jsx";
export default function ExperienceForm({ entry, handleOtherDataChange }) {

  return (
    <div className={styles.formWrapper}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={entry.title}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        name="company"
        value={entry.company}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={entry.city}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        id="startDate"
        name="startDate"
        value={entry.startDate}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        id="endDate"
        name="endDate"
        value={entry.endDate}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={entry.description}
        onChange={(e) => handleOtherDataChange(e, "experience", entry.id)}
        required
      />
    </div>
  );
}