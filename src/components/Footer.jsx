import React from 'react'

function Footer() {
    const date = new Date();
  return (
    <footer className='flex flex-row h-20 w-full bg-[#BEFF72] border-t-neutral-200 border-t-2 justify-around items-center'>
        <a href="#" className='text-sm font-bold tracking-widest'>
            ABOUT
        </a>
        <a href="#" className='text-sm font-bold tracking-widest'>
            PRIVACY POLICY
        </a>
        <a href="#" className='text-sm font-bold tracking-widest'>
            HELP & FAQ
        </a>
        <a href="#" className='text-sm font-bold tracking-widest'>
            TERMS
        </a>
        <a href="#" className='text-sm font-bold tracking-widest'>
            PRIVACY
        </a>
        <a href="https://linktr.ee/gikomba.co" target='blank' className='text-sm font-bold tracking-widest'>
            SOCIALS
        </a>
        <p>Gikomba App © {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer