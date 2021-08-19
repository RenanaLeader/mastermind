import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StarsIcon from '@material-ui/icons/Stars';
import './colorsComputerChoose.css'
function ColorsComputerChoose(props) {

    return (
        <>
        
          <StarsIcon style={{height:'40px', width: '40px'}}></StarsIcon>      
          <StarsIcon style={{height:'40px', width: '40px'}}></StarsIcon>      
          <StarsIcon style={{height:'40px', width: '40px'}}></StarsIcon>    
        <StarsIcon style={{height:'40px', width: '40px'}}></StarsIcon>
        {/* to debbug */}
            {/* <div style={{ backgroundColor: props.computerColors[0] }}>d</div>
            <div style={{ backgroundColor: props.computerColors[1] }}>d</div>
            <div style={{ backgroundColor: props.computerColors[2] }}>d</div>
            <div style={{ backgroundColor: props.computerColors[3] }}>d</div> */}

        </>
    )
}
export default connect(
    (state) => {
        return {
            computerColors: state.game.computerColors
        }
    },
    (dispatch) => {
        return {
        }
    }

)(ColorsComputerChoose)