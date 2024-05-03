import React, { useEffect, useState, useContext, useRef } from 'react'
import { userContext } from '../userContext';
import ProjectTile from './ProjectTile';
import { Octokit } from 'octokit';
import LoadingBar from 'react-top-loading-bar';

function GetProjects({next}) {
    const [loading, setloading] = useState(false);
    const [projects,setProjects] = useState([]);
    const {user,setuser} = useContext(userContext);
    const loadingRef = useRef();
    var index = 0;
    const handleSubmit = (e)=>{
        e.preventDefault();
        loadingRef.current.staticStart();
        setTimeout(()=>{
            loadingRef.current.complete();
            setTimeout(()=>next(),100);
        },2000)
    }
    useEffect(()=>{
        async function fetchData() {
            setloading(true);
            const octokit = new Octokit();
            var reposResponse = await octokit.request('GET /users/{username}/repos', {
                username: user.github,
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28',
                  "authorization" : "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"
                },
                sort: "pushed",
              });
            var repos = reposResponse.data;
            var projects = repos.map((repo)=>{
                return {
                  "projectName": repo.name,
                  "personal": (!repo.fork && repo.forks_count === 0),
                  "language": repo.language,
                  "isComplete": !repo.has_issues,
                  "description": repo.description,
                  "url": repo.html_url,
                  "fromDate": repo.created_at,
                  "toDate": repo.updated_at,
                  "homepage": repo.homepage,
                  "stars": repo.stargazers_count,
                  "forks": repo.forks_count,
                  "isSelected": false
                };
              });
            setProjects(projects);
            setuser({...user,projects: projects});
            setloading(false);
          }
          fetchData();
    },[]);
    return(
  <>
    <div className="grid place-items-center h-screen">
    <LoadingBar color='#6ee7b7' ref={loadingRef} height={10} />
        <form className='font-serif' onSubmit={handleSubmit}>
            <div className="border m-10 p-10">
                <div className='text-4xl p-4'>Choose Projects From your GitHub Profile</div>
                <div className="">Select Atmost 3 Projects</div>
                {
                    loading ? <>Fetching Projects from GitHub</> :
                    projects.map((project) => <ProjectTile key={index++} project={project} />)
                }
                <button onClick={handleSubmit} className='bg-emerald-300 p-4 mx-4 my-10'>Next &rarr;</button>
            </div>
        </form>
    </div>
  </>);
}

export default GetProjects;