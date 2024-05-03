import { useState } from 'react';
import { userContext } from './userContext';
import { StepsProvider } from "react-step-builder";
import MySteps from './components/MySteps';
function App() {
  const [user, setuser] = useState({
    name: "Sandeep Reddy",
    mobile: "1234567890",
    email: "sandeepreddykothakota08@gmail.com",
    projects: [],
    objective: "Retro DIY quinoa, mixtape williamsburg master cleanse bushwick tumblr chillwave dreamcatcher hella wolf paleo. Knausgaard semiotics truffaut cornhole hoodie, YOLO meggings gochujang tofu. Locavore ugh kale chips iPhone biodiesel typewriter freegan, kinfolk brooklyn kitsch man bun. Austin neutra etsy, lumbersexual paleo cornhole sriracha kinfolk meggings kickstarter. ",
    position: "Software Developer",
    location: "Hyderabad",
    twitter: "sandeepkothakota",
    linkedIn: "sandeepkothakota",
    codechef: {
      username: "sandeepkothakota",
      stars: 3,
      problemsSolved: 350,
      maxRating: 1723
    },
    hackerrank: {
      username: "sandeepkothakota",
      stars: 3,
      problemsSolved: 350,
      maxRating: 1723
    },
    codeforces: {
      username: "sandeepkothakota",
      stars: 3,
      problemsSolved: 350,
      maxRating: 1723
    },
    leetcode: {
      username: "sandeepkothakota",
      badges: 2,
      problemsSolved: 350,
      maxRating: 1723
    },
    github: "sandeepreddy0805",
    skills: [],
    education: {
        schoolName: "BVRIT, Narsapur",
        degree: "B.tech",
        specilization: "CSE"
    },
    selectedProjects: 0,
    
  });
  return (
    <div className="App">
      <userContext.Provider value={{user,setuser}}>
        <StepsProvider>
          <MySteps />
        </StepsProvider>
      </userContext.Provider>
    </div>
  );
}

export default App;
