import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram,FaArrowDown,FaArrowUp} from "react-icons/fa";
import my_pfp from '../images/mypfp.png'
import {HiMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

// import my_resume from '../images/my_resume.pdf'

const Avatar = ({darkMode,setDarkMode}) => {
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if (this.scrollY >= 600) {
            downArrow.classList.add('hidden')
        }
        else {
            downArrow.classList.remove('hidden')
        }
    })
    const linkSide=[
        {
            id:1,
            content:(
                <>Github <FaGithub size={30}/></>
            ),
            url:"https://github.com/hussainahmad21200612",
            style:"rounded-tr-md"
        },
        {
            id:2,
            content:(
                <>LinkedIn <FaLinkedin size={30}/></>
            ),
            url:"https://www.linkedin.com/in/hussain-ahmad-62040a215/"
        },
        {
            id:3,
            content:(
                <>MailMe <HiMail size={30}/></>
            ),
            url:"mailto:hussain21200612@gmail.com"
        },
        {
            id:4,
            content:(
                <>Resume <BsFillPersonLinesFill size={30}/></>
            ),
            url:"/Hussain_RESUME.pdf",
            download:true
        },
        {
            id: 5,
            content: (<>Swipe Up<FaArrowUp size={30}/></>),
            scrolling:
                function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
            },
            style:"rounded-br-md"

        }

    ]
    const links = [
        {
            id: 1,
            url: "https://github.com/hussainahmad21200612",
            icon: <FaGithub/>
        },
        {
            id: 2,
            url: "https://www.linkedin.com/in/hussain-ahmad-62040a215/",
            icon: <FaLinkedin />
        },
        {
            id: 3,
            url: "https://twitter.com/yephussainhere",
            icon: <FaTwitter />
        },
        {
            id: 4,
            url: "https://www.instagram.com/yuphussainishere/",
            icon: <FaInstagram />
        },

    ]
    const linkBottom= [
        {
            id: 1,
            url: "https://github.com/hussainahmad21200612",
            icon: <FaGithub/>
        },
        {
            id: 2,
            url: "https://www.linkedin.com/in/hussain-ahmad-62040a215/",
            icon: <FaLinkedin />
        },
        {
            id: 3,
            url: "mailto:hussain21200612@gmail.com",
            icon: <HiMail />
        },
        {
            id: 4,
            download:true,
            icon: <BsFillPersonLinesFill/>
        },
        {
            id: 5,
            icon: <FaArrowUp onClick={ () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }}/>
        }

    ]
  return (
      <section className='
     min-h-screen flex flex-col justify-start items-center p-5  text-center
      '>
      <div className='inline-block'>
          <p className='text-5xl text-cyan-400 font-medium uppercase'>HUSSAIN AHMAD</p>
          </div>
          <h3 className='text-2xl py-5'>Software Developer</h3>
          <p className='max-w-xl font-light text-gray-500 text-xl'> 
              Hello <span className='animate-pulse text-4xl'>👋</span> I'm Hussain Ahmad, a software developer based in India. I enjoy building things for the web. I'm currently working on 
              <a className="hover:text-cyan-400" href='https://github.com/hussainahmad21200612/DSA' target='_blank' rel='noopener noreferrer'> DSA</a> and learning.
            </p>
          <div className='flex justify-evenly  py-4 lg:py-8 w-full md:w-1/3 text-3xl'>
              {/* <FaGithub className='text-2xl cursor-pointer' />  
              <FaLinkedin className='text-2xl cursor-pointer' />
              <FaTwitter className='text-2xl cursor-pointer' />
              <FaInstagram className='text-2xl cursor-pointer' /> */}
              {
                  links.map(({ id, url, icon }) => {
                      
                      return <a href={url} key={id} className='cursor-pointer text-3xl duration-300 hover:text-cyan-500 hover:scale-150 ease-in-out m-5' target="_blank" rel="noopener noreferrer">{icon}</a>
                  })
              
              }
            </div>
              <div className='block'>
                  <img src={my_pfp} alt="avatar" className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-cyan-500 rounded-xl" />
                  <a href="/Hussain_RESUME.pdf" className="flex justify-center text-center py-2 mt-10 bg-gradient-to-r from-cyan-500 to-black text-white rounded-lg" target="_blank" rel="noopener noreferrer" download={true}>Download Resume</a>
              </div>
          <div className='down-arrow mt-10'>
              <FaArrowDown className='hover:text-cyan-500 text-3xl cursor-pointer animate-bounce mt-10 text-gray-500' onClick={
                  () => {
                        // window.scrollTo(3000, window.innerHeight)
                      window.scrollTo({
      top: document.getElementById('skills').offsetTop-50,
      behavior: 'smooth',
    });
                    }
              }/>
         </div>
         
         <div className='hidden md:flex flex-col left-0 top-[35%] fixed text-gray-900'>
      <ul>
              {
                linkSide.map(({ id,content,download,style,url,scrolling}) => {
                   return <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-cyan-500 dark:bg-gray-500 ml-[-100px] hover:ml-[0.2%] hover:rounded-r-md duration-300'+" "+style}>
                    <a href={url} className='cursor-pointer flex justify-between items-center w-40 text-gray-900 dark:text-white' download={download} target="_blank" rel="noopener noreferrer" onClick={scrolling}>
                        {content}
                    </a>
                    </li>

                })
              }
      </ul>
    </div>
    <div className='md:hidden flex top-[92%] justify-evenly text-center items-center w-60 h-[6%] text-xl fixed bg-cyan-500 dark:bg-gray-500 z-10 rounded-3xl'>
              
              {
                  linkBottom.map(({ id, url, icon }) => {
                      
                      return <a href={url} key={id} className='cursor-pointer duration-300 hover:scale-150 ease-in-out ' target="_blank" rel="noopener noreferrer">{icon}</a>
                  })
              
              }
            </div>
    
      </section>
  )
}

export default Avatar