import React, { useContext } from 'react'
import './style.css'
import { userContext } from '../../userContext';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function Resume() {
  const {user} = useContext(userContext);
  let logoText = "";
   user.name.split(" ").forEach(element => {
    logoText += element[0];
  });
  const projects = user.projects.filter((p)=>p.isSelected);
  const saveAsPdf = ()=>{
    const quality = 1 // Higher the better but larger file
    html2canvas(document.querySelector('#resume-root'),
        { scale: quality }
    ).then(canvas => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
        pdf.save("resume.pdf");
    });
    // doc.html(`<html><head><title>My Resume</title></head><body>` + document.getElementById('resume-root').innerHTML + `</body></html>`).then(()=>doc.save("My Resume - 1.pdf"));
  }
  return (
    <>
    <button onClick={saveAsPdf} className='bg-emerald-300 p-3 rounded-lg block mx-auto my-4'>Save as PDF <i class="fa-solid fa-download"></i></button>
    <div id='resume-root'>
    <div class="rela-block">
      <div class="rela-block top-bar">
          <div class="caps name"><div class="abs-center">{user.name}</div></div>
      </div>
    <div class="side-bar">
        <p class="text-9xl font-serif top-10 absolute">{logoText}</p>
        <p>{user.location}</p>
        <p>{user.email}</p><br/>
        <p class="rela-block social twitter">{user.twitter}</p>
        <p class="rela-block social linked-in">{user.linkedIn}</p>
        <p class="rela-block caps side-header">Coding Profiles</p>
        <div className='grid grid-cols-2'>
          <div className="flex flex-col px-2 items-center">
            <div>CodeChef</div>
            <div>
              <div className='py-1'>
                {
                  [1,2,3,4,5,6].map((e)=>{
                    if(e <= user.codechef.stars) return <i class="fa fa-solid fa-star"></i>
                    return <></>
                  })
                }
              </div>
              <div className='py-1'>
                <i class="fa-solid fa-chart-line"></i> {user.codechef.maxRating}
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2 items-center">
            <div>Leetcode</div>
            <div>
              <div className='py-1'>
                {
                  [1,2,3,4,5,6].map((e)=>{
                    if(e <= user.leetcode.badges) return <i class="fa fa-solid fa-star"></i>
                    return <></>
                  })
                }
              </div>
              <div className='py-1'>
                <i class="fa-solid fa-chart-line"></i> {user.leetcode.maxRating}
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2 items-center">
            <div>Codeforces</div>
            <div>
              <div className='py-1'>
                {
                  [1,2,3,4,5,6].map((e)=>{
                    if(e <= user.codechef.stars) return <i class="fa fa-solid fa-star"></i>
                    return <></>
                  })
                }
              </div>
              <div className='py-1'>
                <i class="fa-solid fa-chart-line"></i> {user.codechef.maxRating}
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2 items-center">
            <div>Hackerrank</div>
            <div>
              <div className='py-1'>
                {
                  [1,2,3,4,5,6].map((e)=>{
                    if(e <= user.codechef.stars) return <i class="fa fa-solid fa-star"></i>
                    return <></>
                  })
                }
              </div>
              <div className='py-1'>
                <i class="fa-solid fa-chart-line"></i> {user.codechef.maxRating}
              </div>
            </div>
          </div>
        </div>
        <p class="rela-block caps side-header">Education</p>
        <p class="rela-block list-thing">Advanced potion making</p>
        <p class="rela-block list-thing">Degree in popping and locking</p>
        <p class="rela-block list-thing">Knitting game on point</p>
        <p class="rela-block list-thing">Culinary af</p>
    </div>
    <div class="rela-block content-container">
        <h2 class="rela-block caps title">{user.position}</h2>
        <div class="rela-block separator"></div>
        <div class="rela-block caps greyed">Profile</div>
        <p class="long-margin">{user.objective} </p>
        <div class="rela-block caps greyed">Projects</div>

        <h3>{projects[0].projectName} | <a href="{projects[0].url}"><i class="fa fa-solid fa-code"></i></a> | <a href="{projects[0].homepage}"><i class="fa fa-solid fa-globe"></i></a></h3>
        <p class="light">{!projects[0].personal ? "Team Project" : "Personal Project"}
        <br/>
        {projects[0].fromDate.slice(0,10)} - {projects[0].isComplete ? projects[0].toDate.slice(0,10) : "Present"}</p>
        <p class="justified">{(projects[0].description !== null) ? projects[0].description :"Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle rights aesthetic hella PBR&B."}</p>
        <p>Language: {projects[0].language === null ? "JavaScript" : projects[0].language}  &nbsp; &nbsp;
        <i class="fa fa-solid fa-star"></i> {projects[0].stars} &nbsp; &nbsp; <i class="fa fa-solid fa-code-fork"></i> {projects[0].forks}</p>
        

        <h3>{projects[1].projectName} | <a href={projects[1].url}><i class="fa fa-solid fa-code"></i></a> | <a href="{projects[1].homepage}"><i class="fa fa-solid fa-globe"></i></a></h3>
        <p class="light">{!projects[1].personal ? "Team Project" : "Personal Project"}
        <br/>
        {projects[1].fromDate.slice(0,10)} - {projects[1].isComplete ? projects[1].toDate.slice(0,10) : "Present"}</p>
        <p class="justified">{(projects[1].description !== null) ? projects[1].description :"Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 91's bicycle rights aesthetic hella PBR&B."}</p>
        <p>Language: {projects[1].language === null ? "JavaScript" : projects[1].language}  &nbsp; &nbsp;<i class="fa fa-solid fa-star"></i> {projects[1].stars} &nbsp; &nbsp; <i class="fa fa-solid fa-code-fork"></i> {projects[1].forks}</p>

        <h3>{projects[2].projectName} | <a href="{projects[2].url}"><i class="fa fa-solid fa-code"></i></a> | <a href="{projects[2].homepage}"><i class="fa fa-solid fa-globe"></i></a></h3>
        <p class="light">{!projects[2].personal ? "Team Project" : "Personal Project"}
        <br/>
        {projects[2].fromDate.slice(0,10)} - {projects[2].isComplete ? projects[2].toDate.slice(0,10) : "Present"}</p>
        <p class="justified">{(projects[2].description !== null) ? projects[2].description :"Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan chillwave meh paleo freegan ramps. Letterpress shabby chic fixie semiotics. Meditation sriracha banjo pour-over. Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing VHS, 92's bicycle rights aesthetic hella PBR&B."}</p>
        <p>Language: {projects[2].language === null ? "JavaScript" : projects[2].language}  &nbsp; &nbsp;<i class="fa fa-solid fa-star"></i> {projects[2].stars} &nbsp; &nbsp; <i class="fa fa-solid fa-code-fork"></i> {projects[2].forks}</p>

    </div>
</div>

</div>
     </>
  );
}

export default Resume