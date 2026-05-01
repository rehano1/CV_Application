import { v4 as uuidv4 } from 'uuid';
export const personal = {
 
        firstName: "M. Rehan",
        lastName: "Ashraf",
        email: "rehan.ashraf179@gmail.com",
        phone: "+923121750580",
        location: "Jhang Road, Faisalabad",
        summary: "Self-taught full-stack developer with 2+ years of hands-on experience in JavaScript-based web development, building scalable front-end interfaces and structured back-end logic. Strong in core concepts such as DOM manipulation, functional programming, state management, and API integration, with a focus on clean, maintainable code."

    }

export const other = {
    education : [

        {
            id: uuidv4(),
            degree: "BS-Hons Chemistry",
            institution: "Govt College University",
            city: "Faisalabad",
            startDate: "2016",
            endDate: "2020"
        },
        
        {
            id: uuidv4(),
            degree: "Fsc",
            institution: "Board of Intermediate and Secondary education",
            city: "Faisalabad",
            startDate: "2014",
            endDate: "2016",
        },
        { 
            id: uuidv4(),
            degree: "BS-Hons Chemistry",
            institution: "Govt College University",
            city: "Faisalabad",
            startDate: "2016",
            endDate: "2020"
        },

    ],

    
     experience: [



      {
          id: uuidv4(),
          title: "Senior React Developer",
          company: "Innovate Solutions Inc.",
          city: "San Francisco, CA",
          startDate: "2023-01",
          endDate: "Present",
          description: "Led the development of a new client dashboard, improving user engagement Mentored junior developers on best practices for state management using Redux Toolkit Collaborated with UI/UX teams to implement a responsive design system."
        },
      {
  
          id: uuidv4(),
          title: "Junior Frontend Developer",
          company: "Tech Start-Up Co.",
          city: "San Diego, CA",
          startDate: "2020-06",
          endDate: "2022-12",
          description: "Developed and maintained company website using React and styled components and Implemented various features and bug fixes under the supervision of senior developers."
    
        }
    ],
    

};
