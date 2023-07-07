import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";
import {FiDownload} from 'react-icons/fi'
import "./Navbar.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const naviItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'skills' },
    { id: 4, name: 'projects' },
    { id: 5, name: 'contact' }
   
  ]
  return (

    <div >
      <div className='bg-black z-40 fixed h-20 w-full border-b-[1px] border-gray-300 shadow-xl'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-14  h-full  flex justify-between items-center  text-white'>
          <div>
            <h2 className='text-4xl logo font-bold'>𝔑𝔦𝔰𝔥𝔦𝔱𝔞</h2>
          </div>

          <ul className=' hidden md:flex gap-7'>
            {
              naviItems.map(navItem => <li className='text-gray-300 cursor-pointer font-medium uppercase hover:text-white hover:scale-105 duration-300' key={navItem.id}>
                <Link to={navItem.name} smooth duration={500}>
                  {navItem.name}
                </Link>

              </li>)
            }
          </ul>
          <a download={true} href="/Nishita_Resume.pdf" className='hidden text-white border-[1px] border-b-[6px] p-2 rounded-md  border-[#a64da6] shadow-md shadow-[#993399] hover:bg-[#a64da6] hover:shadow-[0px] md:flex items-center gap-3 uppercase font-medium  py-2 px-4 hover:scale-x-105 duration-300'>resume <span><FiDownload></FiDownload></span></a>
         
          <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer  text-gray-300 md:hidden">
            {
              menuOpen ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
            }
          </div>

          {
            menuOpen && <ul className='absolute top-20 box-border bg-black  w-[50vw] rounded-xl py-6 right-0'>
              {
                naviItems.map(navItem => <li className=' text-gray-300 cursor-pointer font-medium uppercase px-6 py-3 hover:bg-white hover:text-black  duration-300' key={navItem.id}>{navItem.name}</li>)
              }
            </ul>
          }

        </div>
      </div>
      {/* <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}
    </div>

  );
};

export default Navbar;