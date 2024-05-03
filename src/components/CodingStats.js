import React, {useRef} from 'react'
import { codechefStats } from '../crawlers/codechef'
import { leetcodeStats } from '../crawlers/leetcode'
import LoadingBar from 'react-top-loading-bar'

function CodingStats({next}) {
    const loadingRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        loadingRef.current.staticStart();
        setTimeout(()=>{
            loadingRef.current.complete();
            setTimeout(()=>next(),100);
        },2000)
    }
  return (
    <div className="grid place-items-center h-screen relative">
    <LoadingBar color='#6ee7b7' ref={loadingRef} height={10} />
        <form className='font-mono'>
            <div className="border m-10 p-10">
                <div className='text-4xl py-4 font-serif'>Choose Stats You want on your Resume</div>
                <div className="grid grid-cols-2">
                    <div className='py-4 flex flex-col'>
                        <h3 className="text-xl">CodeChef</h3>
                        <div className="px-4 py-4">
                            <div>
                                <span className='px-2'>Max Rating: {`${codechefStats.maxRating}`}</span>
                            </div>
                            <div>
                                <span className='px-2'>Stars: {`${codechefStats.stars}`}</span>
                            </div>
                            <div>
                                <span className='px-2'>Problems Solved: {`${codechefStats.problemsSolved}`}</span>
                            </div>
                            <div>
                                <span className='px-2'>Contests Participated: {`${codechefStats.contestsParticipated}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <h3 className="text-xl">Leetcode</h3>
                        <div className="px-4 py-4">
                            <div>
                                <label className='px-2'>Max Rating: {`${leetcodeStats.maxRating}`}</label>
                            </div>
                            <div>
                                <label className='px-2'> Badges: {`${leetcodeStats.badges}`}</label>
                            </div>
                            <div>
                                <label className='px-2'>Problems Solved: {`${leetcodeStats.problemsSolved}`}</label>
                            </div>
                            <div>
                                <label className='px-2'> Contests Participated: {`${leetcodeStats.contestsParticipated}`}</label>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <h3 className="text-xl">Codeforces</h3>
                        <div className="px-4 py-4">
                            <div>
                                <label className='px-2'>Max Rating</label>
                            </div>
                            <div>
                                <label className='px-2'> Problems Solved</label>
                            </div>
                            <div>
                                <label className='px-2'> Stars: </label>
                            </div>
                            <div>
                                <label className='px-2'> Contests Participated</label>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <h3 className="text-xl">HackerRank</h3>
                        <div className="px-4 py-4">
                            <div>
                                <label className='px-2'>Max Rating</label>
                            </div>
                            <div>
                                <label className='px-2'> Stars</label>
                            </div>
                            <div>
                                <label className='px-2'> Problems Solved</label>
                            </div>
                            <div>
                                <label className='px-2'> Contests Participated</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} className='bg-emerald-300 p-4 mx-4 my-10'>Next &rarr;</button>
            </div>
        </form>
    </div>
  )
}

export default CodingStats