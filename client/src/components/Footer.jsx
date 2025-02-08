import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-0'>
        <img width={150} src={assets.logo} alt="Logo" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
          Copyright @Rishabh | All rights reserved.
        </p>
        <div className='flex gap-2.5'>
            <a href="https://github.com/Rishabh7798" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.github_icon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/rishabh-giri-7798r/" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/rishabh.7798/" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.instagram_icon} alt="Instagram" />
            </a>
        </div>
    </div>
  )
}

export default Footer
