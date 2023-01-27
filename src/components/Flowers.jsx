import React from 'react'

function Flowers(props){
    return (
        <>
            <div className='cards'>
                <h2>{props.title}</h2>
                <img src={props.imgsrc} alt='rose' />
                <p>{props.desc}</p>
                <button>{props.btn}</button>
                <hr></hr>
            </div>
        </>
    )
}

export default Flowers
