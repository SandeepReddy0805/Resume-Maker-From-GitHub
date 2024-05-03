import {Steps, useSteps } from "react-step-builder";
import React from 'react'
import GetPersonalDetails from "./GetPersonalDetails";
import GetCodingProfiles from "./GetCodingProfiles";
import GetSocialProfiles from "./GetSocialProfiles";
import GetProjects from "./GetProjects";
import CodingStats from "./CodingStats";
import Resume from "./Resume/Resume";

function MySteps() {
  const {next, prev} = useSteps();
  return (
    <Steps>
        <GetPersonalDetails next={next} prev={prev}/>
        <GetSocialProfiles next={next} prev={prev}/>
        <GetProjects next={next} prev={prev}/>
        <GetCodingProfiles next={next} prev={prev}/>
        <CodingStats next={next} prev={prev}/>
        <Resume/>
    </Steps>
  );
}

export default MySteps