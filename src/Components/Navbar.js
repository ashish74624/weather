import React, { useContext,  useState } from 'react'
import TempContext from '../Context/TempContext'


const Navbar = (props) => {
    // const [value, setValue] = useState("");
    const context = useContext(TempContext);
    const { setValue } = context;
    const [tempValue, setTempValue] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitSearch();
        }
    }
    const submitSearch=()=>{
        setValue(tempValue);
    }
   
    return (
        <div className={`fixed z-10 ${props.scrolled ? "bg-black":""}`}>

            <div className='flex justify-between w-screen lg:flex lg:justify-between lg:h-max   lg:w-screen lg:py-4'>
                <span className='text-[255%] font-semibold lg:font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-red-600 to-purple-600  lg:text-5xl lg:ml-4 ml-2  mb-2'>
                    Weather
                </span>
                <span className='flex mt-[1.5%] lg:px-4 lg:flex lg:m-0'>
                    <input className='w-[150%] h-[85%] lg:h-max px-4 bg-[#2b4162]/30 rounded-l-full  lg:bg-[#2b4162] lg:bg-opacity-30 lg:rounded-l-full lg:py-3 lg:w-96 lg:px-4 text-white lg:focus:outline-none lg:focus:ring lg:focus:ring-[#2b4162] lg:m-0 ml-10 mb-0 ' type="search"
                        name="City"
                        id="city"
                        placeholder='City'
                        value={tempValue}
                        onChange={(e) => { setTempValue(e.target.value) }}
                        onKeyDown={handleKeyDown}
                        
                    />
                    <button className='bg-[#2b4162] bg-opacity-30 focus:outline-none  pr-4 rounded-r-full  focus:ring focus:ring-[#2b4162] active:bg-slate-800 lg:bg-[#2b4162] lg:bg-opacity-30 lg:rounded-r-full lg:py-2 lg:pr-4 lg:focus:outline-none lg:focus:ring lg:focus:ring-[#2b4162] lg:active:bg-slate-800 mr-2 h-[85%] lg:h-max'
                        onClick={submitSearch}
                    >
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" fill="#323232" />
                            <path d="M15 15L21 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#323232" strokeWidth="2" />
                        </svg></button>

                </span>
            </div>
             </div>
    )
}

export default Navbar
