import React from 'react'
import { CirclePicker } from 'react-color';
import './colorsChoose.css'
import colors from '../../data/colors'
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';

//palette of colors to choose from
function ColorsChoose(props) {
    
    return (
        <>
        <div>
        <CirclePicker onChangeComplete={(color) => { props.setSelectedColors(color.hex); }} colors={colors.slice(0,props.numLevel)} width ='800px' />
        </div>
        </>
    )
}

export default connect(
    (state) => {
        return {
            numLevel:state.game.numLevel
        }
    },
    (dispatch) => {
        return {
            setSelectedColors: color =>
                dispatch(actions.setSelectedColors(color)),
        }
    }


)(ColorsChoose)

