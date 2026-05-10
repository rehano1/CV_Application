import { useState } from 'react';
import PersonalDetailsForm from "./forms/personalDetailsForm"
import FormList from "./forms/formList.jsx";
import { styles } from "./styles.jsx";
export default function Editor ({personalData, setPersonalData, otherData, setotherData, addEntry, deleteEntry}) {

    const [activeForm, setactiveForm] = useState("personal");

  const sections = [
    {id: "personal", label: "Personal Details"},
    {id: "education", label: "Education"},
    {id: "experience", label: "Experience"},
 ];
  
    function handleOtherDataChange(e, section, id) {
    const { name, value } = e.target;
    setotherData ((prev) => ({
      ...prev, 
      [section]: prev[section].map(entry => 
        entry.id === id 
        ? {...entry, [name]: value}
        : entry
      )
    }));
  }
    
    return (
     <div className={styles.flexWrapper}>
      <nav>
        {sections.map(s =>(
          <button
          key={s.id}
          className={activeForm === s.id ? "active" : ""}
          onClick={()=> setactiveForm(s.id)}>
            {s.label}
         </button>
        ))}
      </nav>
      {activeForm === "personal" && (
        <PersonalDetailsForm personalData={personalData} setPersonalData={setPersonalData}/>
      )}
      {(activeForm === "education" || activeForm === "experience") && (
        <FormList 
        addEntry={addEntry} 
        deleteEntry={deleteEntry}
        otherData={otherData}
        handleOtherDataChange={handleOtherDataChange}
        activeForm={activeForm}/>
      )}
     </div>
    );
}
