import { styles } from "../styles.jsx"
export default function EducationForm({ entry, handleOtherDataChange }) {

  return (
    <div className={styles.flexWrapperForDiv}>
      <form action="submit" className={styles.formWrapper}>

      <label htmlFor="degree">Degree</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="degree"
        name="degree"
        value={entry.degree}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="institution">Institution</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="institution"
        name="institution"
        value={entry.institution}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="city">City</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="city"
        name="city"
        value={entry.city}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="startDate"
        name="startDate"
        value={entry.startDate}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="endDate">End Date</label>
      <input
        className={styles.inputStyle}
        type="text"
        id="endDate"
        name="endDate"
        value={entry.endDate}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />
      </form>
    </div>
  );
}