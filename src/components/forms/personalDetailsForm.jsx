export default function PersonalDetailsForm ({personalData, setPersonalData}) {
    
    return (
        <>
        <form action="submit">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={personalData.firstName} onChange={setPersonalData}
            required/>
            {/* second name */}
            <label htmlFor="lastName">Second Name</label>
            <input type="text" id="lastName" name="lastName" value={personalData.lastName} onChange={setPersonalData}
            required/>
            {/* Email */}
                <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={personalData.email} onChange={setPersonalData}
            required/>
            {/* contact */}
                <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={personalData.phone} onChange={setPersonalData}
            required/>
               {/* Location */}
                <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={personalData.location} onChange={setPersonalData}
            required/>
               {/* Summary */}
                <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" name="summary" value={personalData.summary} onChange={setPersonalData}
            required/>


        </form>
        </>
    )
}