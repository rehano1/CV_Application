import Editor from "../editor"
import EducationForm from "./educationForm.jsx";
import ExperienceForm from "./experienceForm.jsx"
import { styles } from "../styles.jsx";

export default function FormList ({otherData, handleOtherDataChange, activeForm, addEntry, deleteEntry}) {
   

    return (
        <div className={styles.flexWrapperForDiv}>
        <div>
           {activeForm === "education" && otherData.education.map((entry) => (
            <div key={entry.id}>
             <EducationForm otherData={otherData} handleOtherDataChange={handleOtherDataChange} entry={entry}
             />
             <button onClick={() => deleteEntry("education", entry.id)}>Delete</button> 
            </div>
           ))
           
           
          
        
        }
         </div>
        
         <div>
           {activeForm === "experience" && otherData.experience.map((entry) => (
            <div key={entry.id}>
             <ExperienceForm  handleOtherDataChange={handleOtherDataChange} entry={entry}
             />
             <button onClick={() => deleteEntry("experience", entry.id)}>Delete</button> 
            </div>
           ))
        }
         </div>
         <button onClick={() => addEntry(activeForm)}> + Add {activeForm}</button>
       </div>


       
    )
    };  

             