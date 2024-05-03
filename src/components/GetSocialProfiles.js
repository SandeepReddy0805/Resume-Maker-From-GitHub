import React, { useContext } from 'react'
import { useRef } from 'react';
import { userContext } from '../userContext';
import LoadingBar from 'react-top-loading-bar';

function GetSocialProfiles({next}) {
    const linkedInRef = useRef();
    const githubRef = useRef();
    const twitterRef = useRef();
    const loadingRef = useRef();
    const {user,setuser} = useContext(userContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setuser({...user,linkedIn: linkedInRef.current.value,github: githubRef.current.value,twitter: twitterRef.current.value});
        loadingRef.current.staticStart();
        setTimeout(()=>{
            loadingRef.current.complete();
            setTimeout(()=>next(),100);
        },2000)
    }
  return (
    <>
    <div className="grid place-items-center h-screen">
    <LoadingBar color='#6ee7b7' ref={loadingRef} height={10} />
        <form className='font-serif' onSubmit={handleSubmit}>
            <div className="border m-10 p-10">
                <div className='text-4xl p-4'>Social Profiles</div>
                <div className='py-4'>
                    <label htmlFor="name" className='px-4'>LinkedIn Username:</label>
                    <input ref={linkedInRef} type="text" name="linkedin" id="linkedin" placeholder='Enter LinkedIn username' className='p-2 border w-60'/>
                </div>
                <div className='py-4'>
                    <label htmlFor="github" className='px-4'>GitHub Username:</label>
                    <input ref={githubRef} type="text" name="github" id="github" placeholder='Enter GitHub username' className='p-2 border w-96'/>
                </div>
                <div className='py-4'>
                    <label htmlFor="twitter" className='pr-3 pl-4'>Twitter Username:</label>
                    <input ref={twitterRef} type="text" name="twitter" id="twitter" placeholder='Enter Twitter username' className='p-2 border'/>
                </div>
                <button onClick={handleSubmit} className='bg-emerald-300 p-4 mx-4 my-10'>Next &rarr;</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default GetSocialProfiles;