import React,{useState} from 'react'

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaLinkedinIn,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsInstagram } from 'react-icons/bs'
import Logo from '../assets/logo.svg'
import {Link} from 'react-scroll' 
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=> setNav(!nav)
  return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-black-300'>
          <div >
              <img src={Logo} alt='Logo Image' style={{width:'90px'}}/>
          </div>
          {/* menu */}
          <ul className='hidden md:flex'>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link> 
              <li>
                  <Link to='about' smooth={true} duration={500}>
                      Sobre mim
                  </Link>
              </li>
              <li>
                  <Link to='skills' smooth={true} duration={500}>
                      Habilidades
                  </Link>
              </li>
              <li>
                  <Link to='work' smooth={true} duration={500}>
                      Trabalho
                  </Link>
              </li>
              <li>
                  <Link to='contact' smooth={true} duration={500}>
                      Contato
                  </Link>
              </li>
          </ul>
          {/*Hamburquer*/}
          <div onClick={handleClick} className='md:hidden z-10'>
              {!nav ? <FaBars/> : <FaTimes/>}
          </div>
          {/*Mobile menu*/}
          <ul className={
              !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-500 flex-col justify-center items-center'}>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to='home' smooth={true}>
                      Home
                  </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to='about' smooth={true}>
                      Sobre mim
                  </Link> 
              </li>
              <li  className='py-6 text-4xl'>
                  <Link onClick={handleClick} to='skills'>
                      Habilidades
                  </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="work">
                      Trabalho
                  </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="contact">
                      Contato
                  </Link>
              </li>
          </ul>
          {/*Social icons*/}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-300 '>
                      <a target='blank' className=' flex 
                      justify-between w-full text-black-300' href='https://www.linkedin.com/in/gabriel-custodio-a04718213/'>
                          Linkedin <FaLinkedin size={30}/>
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex bg-slate-500 justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333333] '>
                      <a target='blank' className=' flex 
                      justify-between w-full text-black-300' href='https://github.com/Custodio97/'>
                          Github <FaGithub size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
                      <a target='blank' className=' flex 
                          justify-between w-full text-black-300' href='https://www.instagram.com/gabriel.custodio3'>
                          Instagram <BsInstagram size={30}/>
                      </a>
                  </li>

              </ul>
          </div>
    </div>
  )
}

export default Navbar