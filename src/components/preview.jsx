
export default function Preview ({personalData, otherData}) {
    return (
        <div>
        {/* div for the first section personalDetails  */}
        <div>
        <h1>{personalData.firstName} {personalData.lastName}</h1>
        <h3>{personalData.email}</h3>
        <h3>{personalData.phone}</h3>
        <h3>{personalData.location}</h3>
        <p>{personalData.summary}</p>
        </div>
        {/* Education */}
        <div>
            <h1>Education</h1>
           
            {Object.entries(otherData.education).map((item) => {
                const id = item[0];
                const educationData = item[1]
                return (
                     <ul key={"school" + id}>
                        <li>
                            {educationData.degree},
                            {educationData.institution}. {educationData.city},
                            {educationData.startDate} - {educationData.endDate}
                        </li>
                        </ul>
                );
            })}
                     
                  
               

            
            </div>
            <div>
            {/* Experience */}
              <h1>Experience</h1>
           
            {Object.entries(otherData.experience).map((item) => {
                const id = item[0]
                const experienceData = item[1]
                return (
                     <ul key={"school" + id}>
                        <li>
                            <strong>
                                {experienceData.title},
                            {experienceData.company}. {experienceData.city},
                            {experienceData.startDate} - {experienceData.endDate}

                                </strong>
                            <p>{experienceData.description}</p>
                        </li>
                        </ul>
                );
            })}
            
             </div>

        </div>
    )
}