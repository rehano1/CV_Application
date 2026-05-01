export default function EducationForm({ entry, handleOtherDataChange }) {

  return (
    <div>
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        name="degree"
        value={entry.degree}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="institution">Institution</label>
      <input
        type="text"
        id="institution"
        name="institution"
        value={entry.institution}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={entry.city}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        id="startDate"
        name="startDate"
        value={entry.startDate}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />

      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        id="endDate"
        name="endDate"
        value={entry.endDate}
        onChange={(e) => handleOtherDataChange(e, "education", entry.id)}
        required
      />
    </div>
  );
}