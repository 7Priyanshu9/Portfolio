// import React, { useState } from 'react'
// import { navLinks } from '../Userdata/navlinks';

// const Navbar = () => {
    
//     const [isActive, setIsActive ]= useState(false);

//     const NavItems = () =>{
//         return (
//             <ul className='nav-ul'>
//                 {navLinks.map((link) => (
//                     <li key={link.id} className='nav-li'>
//                         <a href={link.path} className='nav-li_a' onClick={()=>{}}>
//                             {link.name}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         )
//     }

//     const toggleMenu=() =>{
//         setIsActive((prev)=> !prev);
//     }


//   return (
//     <header className='text-white-700 fixed top-0 left-0 right-0 z-50 bg-black/90'>
//         <div className='max-w-7xl mx-auto '>
//             <div className="flex justify-between items-center py-5 mx-auto c-space ">
//             <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors '>
//             Priyanshu 
//             </a>    

//             <button onClick={toggleMenu} className='text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex ' aria-label='Toggle menu' >
//                 <img src={ isActive ? "assets/close.svg":"assets/menu.svg"} alt="Hamburger" className='w-6 h-6' />
//             </button>

//             <nav className='sm:flex hidden '> <NavItems/>  </nav>
//             </div>    
//         </div> 

//         <div className={`nav-SideBar ${isActive ? 'max-h-screen' : 'max-h-0'} `}>
//             <nav className="p-5"> <NavItems/>    </nav>
//         </div>
//     </header>
//   )
// }

// export default Navbar


import React, { useState } from 'react'
import { navLinks } from '../Userdata/navlinks';


const Navbar = () => {
    
    const [isActive, setIsActive ]= useState(false);


    const NavItems = () =>{
        return (
            <ul className='nav-ul'>
                {navLinks.map((link) => (
                    <li key={link.id} className='nav-li'>
                        <a href={link.path} className='nav-li_a' onClick={()=>{}}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }


    const toggleMenu=() =>{
        setIsActive((prev)=> !prev);
    }



  return (
    <header className='text-white-700 fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto '>
            <div className="flex justify-between items-center py-5 mx-auto c-space ">
            <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors '>
            Priyanshu 
            </a>    


            <button onClick={toggleMenu} className='text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex ' aria-label='Toggle menu' >
                <img src={ isActive ? "assets/close.svg":"assets/menu.svg"} alt="Hamburger" className='w-6 h-6' />
            </button>

            <nav className='sm:flex hidden '> <NavItems/>  </nav>
            </div>    
        </div> 


        <div className={`nav-sidebar ${isActive ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5"> <NavItems/> </nav>
        </div>
    </header>
  )
}


export default Navbar