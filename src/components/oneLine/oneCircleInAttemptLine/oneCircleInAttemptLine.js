import React from 'react'
import './oneCircleInAttemptLine.css'
import StarsIcon from '@material-ui/icons/Stars';

export default function OneCircleInAttemptLine(props) {
    return (
        <>
       
            <div className='col'>
                 <StarsIcon  style={{color:props.color&&props.color,height:'40px', width: '40px'}}></StarsIcon>  
                {/* <div className='oneCircle' style={{backgroundColor:props.color}}></div> */}
            </div>
        </>
    )
}