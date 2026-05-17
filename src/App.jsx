import { useState } from 'react';
import './App.css'
import Preview from "./components/preview.jsx";
import { personal, other }   from "./components/data";
import Editor from "./components/editor.jsx"
import { v4 as uuidv4 } from 'uuid';
import { styles } from "./components/styles.jsx";
import { usePDF } from "react-to-pdf";
export default function App() {
  const [personalData, setpersonalData] = useState(personal);
  const [otherData, setotherData] = useState(other);
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf"})

  
  function handlePersonalDataChange (e) {
        const {name, value} = e.target;
        setpersonalData ((prev) => ({
            ...prev,
            [name]: value

               }));
            
        };


  
  
  // adding the entry to the education and expeience array
  const addEntry = (section) => {
    const emptyTemplates = {
       education: {
            id: uuidv4(),
            degree: "",
            institution: "",
            city: "",
            startDate: "",
            endDate: ""
        },
        experience: {
          id: uuidv4(),
          title: "",
          company: "",
          city: "",
          startDate: "",
          endDate: "",
          description: ""
        }
    }
    setotherData (prev => ({
      ...prev,
      [section]: [
        ...prev[section],
       emptyTemplates[section]
      ]

    }))
  }

//  delete entry by using filter method 
  const deleteEntry = (section, id) => {
    setotherData (prev => ({
      ...prev,
      [section]: prev[section].filter(entry => entry.id !== id)
    }))
  } 








  return (
    <>
    <div className={styles.flexWrapperForMainDiv}>
    <Editor personalData={personalData} setPersonalData={handlePersonalDataChange} otherData={otherData} setotherData={setotherData} addEntry={addEntry} deleteEntry={deleteEntry}/>
    <Preview personalData={personalData} otherData={otherData} ref={targetRef}/>
    <button onClick={() => toPDF()}>Download PDF</button>
    </div>
    </>
      
  )
}