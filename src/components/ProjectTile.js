import React from 'react'
import { useContext } from 'react';
import { userContext } from '../userContext';

function ProjectTile({project}) {
  const {user,setuser} = useContext(userContext);
  function selectProject(){
    if(! project.isSelected && user.selectedProjects === 3) return;
    project.isSelected = !project.isSelected;
    setuser({...user,projects: user.projects, selectedProjects: project.isSelected ? user.selectedProjects + 1 : user.selectedProjects - 1});
  }
  return (
    <div onClick={selectProject} className={`border p-4 ${project.isSelected ? 'bg-slate-300': ''}`}>
      <h3 className='font-mono font-extrabold'>{project.projectName} | <a href="project{project.url}">code <i class="fa fa-solid fa-code"></i></a> | <a href="project{project.homepage}">live <i class="fa fa-solid fa-globe"></i></a></h3>
      <p class="text-slate-600">{!project.personal ? "Team Project" : "Personal Project"}
      <br/>
      {project.fromDate.slice(0,10)} - {project.isComplete ? project.toDate.slice(0,10) : "Present"}</p>
      <p class="text-gray-400 py-4">{(project.description !== null) ? project.description :"Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle rights aesthetic hella PBR&B."}</p>
      <p>Language: {project.language === null ? "JavaScript" : project.language}  &nbsp; &nbsp;
      <i class="fa fa-solid fa-star"></i> {project.stars} &nbsp; &nbsp; <i class="fa fa-solid fa-code-fork"></i> {project.forks}</p>
</div>
  );
}

export default ProjectTile