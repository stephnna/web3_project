import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';

const NavbarItem = ({title, classprops}) => {
 return (   
      <li className={`mx-8 cursor-pointer ${classprops}`}>
       {title}
     </li>
    )    
     
  
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav className="flex justify-between  items-center py-4 px-6">
    <div className='flex items-center flex-wrap'>
      <div><img src={logo} alt="logo" className='w-14 md:ml-14 mb-2 mr-6 md:mt-4 cursor-pointer'/></div>
      <div><h1 className='text-white text-3xl font-extrabold md:ml-14 text-gradient'>VILD</h1></div>
    </div>
    <ul className='text-white md:flex hidden list-none items-center mr-8'>
      <li className='mr-8 cursor-pointer'><a href="https://coincript.netlify.app/">Market</a></li>      
      {["Exchange", 'Tradingview', 'Wallets'].map((item, index) => (
        <NavbarItem key={item + index} title={item}  />
      ))}
      <li className='bg-[#2952e3] py-2 px-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
        Login
        </li>
    </ul>
    <div className='flex relative md:hidden'>
      {toggleMenu ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} />
                  :  <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)} />      
    }
    {toggleMenu && (
      <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
      flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>

        <li className='text-xl w-full my-2'>
          <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
        </li>
        {["Market", "Exchange", 'Tutorials', 'Wallets'].map((item, index) => (
        <NavbarItem key={item + index} title={item} classprops="my-2 text-lg"/>
      ))}
      <li className='bg-[#2952e3] py-2 px-4 mx-4 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]'>
        Login
        </li>
      </ul>
    )}
    </div>
  </nav>
  );
}

export default Navbar;
