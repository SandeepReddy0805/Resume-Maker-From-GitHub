import React, { useRef, useContext } from 'react'
import LoadingBar from 'react-top-loading-bar';
import { userContext } from '../userContext';

function GetCodingProfiles({next}) {
  const codechefRef = useRef();
  const leetcodeRef = useRef();
  const codeforcesRef = useRef();
  const hackerrankRef = useRef();
  const loadingRef = useRef();
  
  const {user,setuser} = useContext(userContext);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setuser({...user,
      codechef: {...user.codechef,username: codechefRef.current.value},
      leetcode: {...user.leetcode,username: leetcodeRef.current.value},
      codeforces: {...user.codeforces,username: codeforcesRef.current.value},
      hackerrank: {...user.hackerrank,username: hackerrankRef.current.value}});
      loadingRef.current.staticStart();
        setTimeout(()=>{
            loadingRef.current.complete();
            setTimeout(()=>next(),100);
        },2000)
  }
  return (
    <div className="h-screen grid place-items-center font-serif relative">
      <LoadingBar color='#6ee7b7' ref={loadingRef} height={10} />
      <div className='text-4xl p-4'>Enter Coding profile Details</div>
      <div className="border grid grid-cols-2 p-10">
        <div className='p-4 text-xl'>
          <label htmlFor="codechef" className='px-2'>CodeChef Username:</label>
          <input type="text" name="codechef" ref={codechefRef} id="codechef" className='border'/>
        </div>
        <div className='p-4 text-xl'>
          <label htmlFor="codeforces" className='px-2'>Codeforces Username:</label>
          <input type="text" name="codeforces" ref={codeforcesRef} id="codeforces" className='border'/>
        </div>
        <div className='p-4 text-xl'>
          <label htmlFor="leetcode" className='px-2'>Leetcode Username:</label>
          <input type="text" name="leetcode" ref={leetcodeRef} id="leetcode" className='border'/>
        </div>
        <div className='p-4 text-xl'>
          <label htmlFor="hackerrank" className='px-2'>HackerRank Username:</label>
          <input type="text" name="hackerrank" ref={hackerrankRef} id="hackerrank" className='border'/>
        </div>
      <button onClick={handleSubmit} className='bg-emerald-300 p-4 mx-4 my-10 w-32'>Next &rarr;</button>
      </div>
      </div>
  )
}

export default GetCodingProfiles