import React from 'react'
import {MdNightsStay,MdWbSunny } from "react-icons/md";
import my_pfp from '../images/mypfp.png'
const Header = ({darkMode,setDarkMode}) => {
  return (
      <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
          <nav className='flex py-5 px-5  justify-between '>
              <img src={my_pfp} className='text-1 w- w-12 h-12 rounded-[100%] object-cover object-top bg-gradient-to-b from-cyan-500'/>
              <div onClick={() => {
                  setDarkMode(!darkMode)
              }}>
                  {
                      darkMode ?
                          (
                              <MdWbSunny className='text-2xl cursor-pointer' />
                              
                          ) :
                          (
                              <MdNightsStay className='text-2xl cursor-pointer' />
                          )
                  }
                    
              </div>
          </nav>
          
    </header>
  )
}

export default Header