import React, { useContext } from 'react'
import { useRef } from 'react';
import { userContext } from '../userContext';
import LoadingBar from 'react-top-loading-bar';

function GetPersonalDetails({next}) {
    const nameRef = useRef();
    const emailRef = useRef();
    const mobileNumberRef = useRef();
    const {user, setuser} = useContext(userContext);
    const loadingRef = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setuser({...user,name: nameRef.current.value,mobile: mobileNumberRef.current.value,email: emailRef.current.value});
        loadingRef.current.staticStart();
        setTimeout(()=>{
            loadingRef.current.complete();
            setTimeout(()=>next(),100);
        },2000)
    
    }
  return (
    <>  
    <div className="grid place-items-center h-screen relative">
    <LoadingBar color='#6ee7b7' ref={loadingRef} height={10} />
        <form className='font-serif' onSubmit={handleSubmit}>
            <div className="border m-10 p-10">
                <div className='text-4xl p-4'>Personal Details</div>
                <div className='py-4'>
                    <label htmlFor="name" className='px-4'>Name:</label>
                    <input ref={nameRef} type="text" name="name" id="name" placeholder='Enter Name' className='p-2 border w-60'/>
                </div>
                <div className='py-4'>
                    <label htmlFor="name" className='px-4'>Email:</label>
                    <input ref={emailRef} type="email" name="email" id="email" placeholder='Enter Email' className='p-2 border w-96'/>
                </div>
                <div className='py-4'>
                    <label htmlFor="name" className='pr-3 pl-4'>Mobile:</label>
                    <input ref={mobileNumberRef} type="number" name="mobile" id="mobile" placeholder='Enter Mobile Number' className='p-2 border'/>
                </div>
                <button onClick={handleSubmit} className='bg-emerald-300 p-4 mx-4 my-10'>Next &rarr;</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default GetPersonalDetails;