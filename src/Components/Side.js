import React, { useState, useContext, useEffect } from 'react'
import TempContext from '../Context/TempContext';


function Side() {
    const context = useContext(TempContext);
    const { value } = context;
    const [co, setCo] = useState("");
    const [no2, setNo2] = useState("");
    const [o3, setO3] = useState("")
    const [so2, setSo2] = useState("")
    const [pm2_5, setPm2_5] = useState("");
    const getAQI = async () => {
        let url = `https://api.weatherapi.com/v1/current.json?key=c7c55c62a62f4983884114352232903&q=${value}&aqi=yes`;
        var data = await fetch(url);
        var parsedData = await data.json();

        if (Object.keys(parsedData)[0] === "location") {
            setCo(parsedData.current.air_quality.co);
            setNo2(parsedData.current.air_quality.no2);
            setO3(parsedData.current.air_quality.o3);
            setSo2(parsedData.current.air_quality.so2);
            setPm2_5(parsedData.current.air_quality.pm2_5);
        }
        else{
            setCo("");
            setNo2("");
            setO3("");
            setSo2("");
            setPm2_5("");
        }
    }
    useEffect(()=>{
        getAQI();
    },)
    return (
        <div className='mt-6 lg:mb-0 mb-10 mx-auto py-4 md:mt-28 lg:m-0 h-[60%] lg:h-[40vh] w-[90%] lg:w-[32vw] bg-slate-600 bg-opacity-30 text-blue-300 rounded-lg flex items-center'>
            <div className='relative w-full space-y-[0.75px]'>
                <p className='relative list-none text-xl text-blue-300 py-1 mx-4  bg-black/40 underline-offset-2 underline rounded-t-xl pl-2'>Air Quality Index</p>
                <div className='relative  lg:w-full'>
                    <ul className='relative list-none text-lg text-blue-300 space-y-[0.75px] mx-4  border-black/40'>
                        <li className='relative w-full bg-black/40 px-2 py-1 '>Carbon Monoxode : 
                             <span className='text-orange-400'> {co}</span></li>
                        <li className='relative w-full bg-black/40 px-2 py-1 '>Nitrogen Dioxide : 
                             <span className='text-orange-400'> {no2}</span></li>
                        <li className='relative w-full bg-black/40 px-2 py-1 '>Ozone : 
                             <span className='text-orange-400'> {o3}</span></li>
                        <li className='relative w-full bg-black/40 px-2 py-1 '>Sulphur Dioxide : 
                             <span className='text-orange-400'> {so2}</span></li>
                        <li className='relative w-full bg-black/40 px-2 py-1 rounded-b-xl'>PM 2.5 : 
                             <span className='text-orange-400'> {pm2_5}</span></li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Side
