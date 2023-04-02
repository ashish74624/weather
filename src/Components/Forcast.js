import React, { useContext, useEffect, useState } from 'react'
import TempContext from '../Context/TempContext';
import ForcastItem from './ForcastItem';

function Forcast() {
    const [forecastArticle, setForecastArticle] = useState([])
    const context = useContext(TempContext);
    const { value } = context;

    const forC = async () => {
        let url = `http://api.weatherapi.com/v1/forecast.json?key=c7c55c62a62f4983884114352232903&q=${value}&days=5&aqi=no&alerts=no`;
        var data = await fetch(url);
        // if (data?.ok) {
        //     console.log("doneee");
        // }
        // else {
        //     console.log("not done")
        // }
        var parsedData = await data.json();
        if (Object.keys(parsedData)[0] === "location") {
            setForecastArticle(parsedData.forecast.forecastday);
        }
        else {

        }
        // console.log(parsedData[0])
        // console.log(Object.keys(parsedData)[0])

        // let forecast = parsedData.forecast;
        // console.log(forecast.forecastday[1].hour[0].condition.text.split(" ").join(""))

    }

    // console.log(parsedData.current);
    // console.log(parsedData.forecast)
    // setForecastArticle(parsedData.forecast.forecastday);
    // console.log(forecast.forecastday)

    // console.log(forecast.forecastday[1].hour)
    // console.log(forecastArticle);
    useEffect(() => {

        forC();

    },)
    return (
        <>
            <div className=' rounded-lg mx-0 mt-3 pb-8 pt-1'>
                <span className='text-3xl text-white ml-3 lg:ml-8 underline underline-offset-2'>
                    Forcast:
                </span>
                <div className='overflow-y-scroll lg:overflow-hidden grid grid-cols-4 gap-x-40 md:gap-x-10 mx-4  mt-5 lg:grid lg:grid-cols-4 lg:mt-6 lg:gap-x-6 lg:mx-12'>
                    {forecastArticle.slice(1).map((element) => {
                        return (
                            <div key={element.date_epoch}>
                                <ForcastItem imgText={element.hour[0].condition.text.split(" ").join("")} text={element.hour[0].condition.text} date={element.date} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Forcast
