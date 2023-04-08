import React, { useContext, useEffect, useState } from 'react'
import TempContext from '../Context/TempContext';
import Forcast from './Forcast'
import {  AnimatePresence, motion } from 'framer-motion';


function Temp(props) {
    const context = useContext(TempContext);
    const { value } = context;
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [tempC, setTempC] = useState("");
    const [condition, setCondition] = useState("");
    const [showData, setShowData] = useState(true)
    const getWeather = async () => {
        // console.log(a)
        let url = `https://api.weatherapi.com/v1/current.json?key=c7c55c62a62f4983884114352232903&q=${value}&aqi=no`;
        var data = await fetch(url);
        var parsedData = await data.json();

        if (Object.keys(parsedData)[0] === "location") {
            setShowData(true)
            setCity(parsedData.location.name);
            setRegion(parsedData.location.region);
            setCountry(parsedData.location.country)
            setTempC(parsedData.current.temp_c);
            setCondition(parsedData.current.condition.text)
        }
        else if (Object.keys(parsedData)[0] === "error") {
            setShowData(false);
            setCity("Please Enter Corect location")
        }
        else {
        }

    }
    useEffect(() => {
        getWeather();
        // eslint-disable-next-line 
    },)
    return (
        <AnimatePresence mode='wait'>
        <motion.div className='bg-slate-600 bg-opacity-30  h-max lg:h-max lg:w-[62vw] rounded-xl  lg:m-4 w-[94%] mx-[3%] '
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        key={city}
        id='temp'
        >
            <div className=' md:flex-row md:flex flex md:justify-between flex-col-reverse lg:flex lg:flex-row lg:justify-between overflow-x-scroll  lg:overflow-y-hidden'>
                <span className='flex flex-row md:flex md:flex-col text-6xl md:text-9xl lg:text-9xl text-[#f5f5f5] font-thin lg:ml-4 ml-2 mr-20' id="Location">
                    {city}
                    {showData && (
                        <span className='text-white text-2xl md:text-3xl font-light mt-1 lg:ml-2 ml-3  md:self-start self-end lg:self-start'>{region} {country}</span>
                    )
                    }
                </span>
                {showData && (
                    <span className='text-8xl md:text-9xl mr-4 md:ml-1 text-[#f5f5f5] font-thin' id="temperature">
                        {tempC}
                        <sup>o</sup>C
                    </span>
                )}

            </div>
            <div>
            {showData && (
                <div className='text-5xl lg:ml-3  mt-4 font-light h-max w-max p-4  text-blue-300 rounded-2xl'>
                    <span>
                        {condition}
                    </span>
                </div>
            )}</div>
            <div>
            {showData &&

                <Forcast value={value} imgText={props.imgText} />
            }</div>
        </motion.div></AnimatePresence>
    )
}

export default Temp
