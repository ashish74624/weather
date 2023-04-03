import React, { useContext, useEffect, useState } from 'react'
import TempContext from '../Context/TempContext';

function Recent() {
    let context = useContext(TempContext);
    const { value } = context;
    const [lastUpdate, setLastUpdate] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [tempF, setTempF] = useState("");
    const [wind, setWind] = useState("");
    const [humidity, setHumidity] = useState("");
    const [windD, setWindD] = useState("");

    async function getdata() {
        let url = `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=c7c55c62a62f4983884114352232903&q=${value}&aqi=no`
        let data = await fetch(url);
        let parsedData = await data.json();
        if (Object.keys(parsedData)[0] === "location") {
            setLastUpdate(parsedData.current.last_updated);
            setFeelsLike(parsedData.current.feelslike_c);
            setHumidity(parsedData.current.humidity);
            setTempF(parsedData.current.temp_f);
            setWind(parsedData.current.wind_kph);
            setWindD(parsedData.current.wind_dir);
        }
        else{
            setLastUpdate("");
            setFeelsLike("");
            setHumidity("");
            setTempF("");
            setWind("");
            setWindD("");
        }
    }
    useEffect(() => {
        getdata();
    },)
    let l = lastUpdate.substring(11)
    return (
        <>
            <div className='flex mx-auto py-4 items-center lg:m-0 mt-28 relative lg:relative h-[60%] lg:h-[38vh] w-[90%] lg:w-[32vw] bg-slate-600 bg-opacity-30  rounded-lg '>
                <ul className='relative list-none text-xl text-blue-300 space-y-[0.85px] w-[90%] lg:w-full lg:mx-4 mx-[5%] border-black/40'>
                    <li className='relative w-full bg-black/40 px-2 py-1 rounded-t-xl'>
                        Last Updated : <span className='text-orange-400'>{l}</span>
                    </li>
                    <li className='relative w-full bg-black/40 px-2 py-1  '>
                        Temperature in F : <span className='text-orange-400'>{tempF}</span>
                    </li>
                    <li className='relative w-full bg-black/40 px-2 py-1  '>
                        Feels Like : <span className='text-orange-400'>{feelsLike}</span>
                    </li>
                    <li className='relative w-full bg-black/40 px-2 py-1  '>
                        Wind Speed : <span className='text-orange-400'>{wind}</span>
                    </li>
                    <li className='relative w-full bg-black/40 px-2 py-1  '>
                        Humidity : <span className='text-orange-400'>{humidity}</span>
                    </li>
                    <li className='relative w-full bg-black/40 px-2 py-1 rounded-b-xl'>
                        Wind Direction : <span className='text-orange-400'>{windD}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Recent
