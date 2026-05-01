import { useState } from 'react';
import './App.css'
import Preview from "./components/preview.jsx";
import { personal, other }   from "./components/data";
import Editor from "./components/editor.jsx"
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  const [personalData, setpersonalData] = useState(personal);
  const [otherData, setotherData] = useState(other);

  
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
    <Editor personalData={personalData} setPersonalData={handlePersonalDataChange} otherData={otherData} setotherData={setotherData} addEntry={addEntry} deleteEntry={deleteEntry}/>
    <Preview personalData={personalData} otherData={otherData}/>
    </>
      
  )
}