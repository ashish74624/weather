import React, { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import Recent from './Recent'
import Side from './Side'
import Temp from './Temp'
import TempContext from '../Context/TempContext'

function Background() {
    const context = useContext(TempContext);
    const { value } = context;

    const [imgText, setImgText] = useState("")
    const [day, setDay] = useState("Day");
    const bg = async () => {
        let url = `https://api.weatherapi.com/v1/current.json?key=c7c55c62a62f4983884114352232903&q=${value}&aqi=no`
        let data = await fetch(url);
        let parsedData = await data.json();
        if (Object.keys(parsedData)[0] === "location") {
            let condition = parsedData.current.condition.text
            let text = condition.split(" ").join("")
            setImgText(text)
            if (parsedData.current.is_day) {
                setDay("Day")
            }
            else {
                setDay("Night")
            }
        }
        localStorage.setItem("value", value);

    }
    // let screen= document.getElementById("Background")
    const [scrolled, setScrolled] = useState(false);
    const onScroll = () => {
        if (document.getElementById("Background").scrollTop > 10) {
            setScrolled(true);
            // console.log("Scrolled")
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        document.getElementById("Background").addEventListener('scroll', onScroll);
        bg();
        return () => window.removeEventListener('scroll', onScroll);
    },[value])
    // let element = document.getElementById('temp')

    // console.log(document.getElementById('page').getClientRects());

    return (
        <>
        <div className='fixed -z-40 h-screen w-screen overflow-hidden bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'>

        </div>
        <img className='fixed -z-20 h-screen w-screen overflow-hidden' src={`https://image-get.vercel.app/ashishkumar74624@gmail.com/${day}/${imgText}.webp`} alt="Background" />
        <div className='w-full h-max lg:flex-none flex-col '
        id='page'
        >
            <div className='relative bg-cover bg-no-repeat h-screen w-screen overflow-y-scroll '
            id='Background'>
                <Navbar scrolled={scrolled} />
                <div className='md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-none lg:grid-rows-none'>
                <div className='relative lg:absolute lg:top-20 top-20 col-span-2'>
                    < Temp value={value} />
                </div>
                <div className='lg:ml-0 md:ml-2 lg:relative lg:left-[66vw] lg:top-24'>
                    <Recent />
                </div>
                <div className=' lg:relative lg:left-[66vw] lg:top-28'>
                    <Side />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Background
