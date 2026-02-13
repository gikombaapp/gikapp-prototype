import React from 'react'

const Profile = () => {
  return (
    <section className='flex flex-row flex-wrap h-screen w-full'>
        {/* profile grid */}
        <div className='flex flex-col h-[70%] w-[90%] mx-auto my-10 bg-neutral-400 justify-self-center'>
            {/* profile main */}
                {/* banner */}
                <img src="" alt="user banner" className="bg-neutral-200 h-[40%]" />
                {/* profile pic */}
                <img src="" alt="profile pic" className='relative left-5 -top-25 text-center bg-neutral-200 outline-4 outline-neutral-400 w-50 h-50 rounded-[50%]'/>

        </div>
    </section>
  )
}

export default Profile