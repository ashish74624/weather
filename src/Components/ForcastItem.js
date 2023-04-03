import React from 'react'

function ForcastItem(props) {
    return (
        <>
            {/* <div className='bg-white h-40 w-40'>
                {props.text}
                {props.date}
            </div> */}
            <div className="h-36 w-36 lg:h-44 lg:w-44 bg-cover  group overflow-hidden rounded-lg"
                id="HOVER"
                style={{ backgroundImage: `url(./Assests/Day/Clear.jpg)` }}
            >
                <div className="  h-full w-full bg-black/30 text-white flex-col flex items-center justify-center bottom-0  " id="hover" >
                    <p>{props.text}</p> <p>{new Date(props.date).toDateString()}</p> </div>
            </div>
        </>
    )
}

export default ForcastItem
