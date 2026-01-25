import React from 'react'

function PopularSection() {
  return (
    <section className='p-5 flex flex-row justify-around '>
        {/* This one will be a large one on the left (hidden on mobile) */}
        <div className='bg-[#8b60c3b2] h-130 w-130'>
            {/* Top Search */}
        </div>
        {/* The other four will be in a square */}
        <div className='flex flex-row flex-wrap w-[50%]'>
        <div className='h-62 w-62 mx-8 bg-[#8b60c3b2]'>
            {/* Popular Brand */}
        </div>
        <div className='h-62 w-62 mx-8 bg-[#8b60c3b2]'>
            {/* Popular Category */}
        </div>
        <div className='h-62 w-62 mx-8 bg-[#8b60c3b2]'>
            {/* Staff choice */}
        </div>
        <div className='h-62 w-62 mx-8 bg-[#8b60c3b2]'>
            {/* Trending items */}
        </div>
        </div>
    </section>
  )
}

export default PopularSection