import React from 'react'
import { connect } from 'react-redux'
import './oneAttemptLineResult.css'
import StopIcon from '@material-ui/icons/Stop';export default function OneAttemptLineResult(props) {
    return (
        <>
        <div className='col one_circle_result'>
        <StopIcon style={{ color: props.color,backgroundColor: props.color, height:'15px', width: '15px', border:'1px black solid' }}></StopIcon>
            {/* <div className='div_one_result_circle' style={{ backgroundColor: props.color, width: '20px' }}></div> */}
            </div>
        </>
    )
}

