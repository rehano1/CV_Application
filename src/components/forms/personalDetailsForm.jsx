import { styles } from "../styles.jsx";
export default function PersonalDetailsForm ({personalData, setPersonalData}) {
    
    return (
        <>
        <form className={styles.formWrapper} action="submit">
            <label htmlFor="firstName">First Name</label>
            <input className={styles.inputStyle} type="text" id="firstName" name="firstName" value={personalData.firstName} onChange={setPersonalData}
            required/>
            {/* second name */}
            <label htmlFor="lastName">Second Name</label>
            <input className={styles.inputStyle} type="text" id="lastName" name="lastName" value={personalData.lastName} onChange={setPersonalData}
            required/>
            {/* Email */}
                <label htmlFor="email">Email</label>
            <input className={styles.inputStyleLarge} type="email" id="email" name="email" value={personalData.email} onChange={setPersonalData}
            required/>
            {/* contact */}
                <label htmlFor="phone">Phone</label>
            <input className={styles.inputStyle} type="tel" id="phone" name="phone" value={personalData.phone} onChange={setPersonalData}
            required/>
               {/* Location */}
                <label htmlFor="location">Location</label>
            <textarea rows={5} cols={40} className={styles.inputStyle} type="text" id="location" name="location" value={personalData.location} onChange={setPersonalData}
            required/>
               {/* Summary */}
                <label htmlFor="summary">Summary</label>
            <textarea rows={5} cols={40} className={styles.inputStyleLarge} type="text" id="summary" name="summary" value={personalData.summary} onChange={setPersonalData}
            required/>


        </form>
        </>
    )
}