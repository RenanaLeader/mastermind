import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../redux/actions'
import OneAttemptLineResult from '../oneAttemptLineResult/oneAttemptLineResult'
import OneCircleInAttemptLine from '../oneCircleInAttemptLine/oneCircleInAttemptLine'
import './oneAttemptLine.css'

//see attempt and him result.
//and one attempt from previos attempts
//by from props variable
function OneAttmptLine(props) {

    //see user the colors he choose
    const renderCircle = props.selectedColors.map((color) => {
        return <OneCircleInAttemptLine
           color={color}>
        </OneCircleInAttemptLine>
    })
     //see user the result of previos attemptets
    const renderCircleResult = props.results&&props.results.map((color) => {
        return <OneAttemptLineResult
            color={color}>
        </OneAttemptLineResult>
    })
     //see user the colors of previos attemptets
    const renderCircleAttempt = props.colors ? props.colors.map((color) => {
        return <OneCircleInAttemptLine
            color={color}>
        </OneCircleInAttemptLine>
    }) : null
    return (
        <>
            <div className='container'>
                <div className='row div_circles'>
                    {props.from == 'viewAttemptLine' ? renderCircleAttempt : renderCircle}
                    {props.from == 'viewAttemptLine' ? renderCircleResult : null}
                </div>
            </div>

        </>
    )
}
export default connect(
    (state) => {
        return {
            selectedColors: state.game.selectedColors,
            resultAttempt: state.game.resultAttempt
        }
    },
    (dispatch) => {
        return {
            checkedAttempt: () => dispatch(actions.checkedAttempt())
        }
    }

)(OneAttmptLine)