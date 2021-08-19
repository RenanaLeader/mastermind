import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../redux/actions'
import OneAttemptLineResult from '../oneAttemptLineResult/oneAttemptLineResult'
import OneCircleInAttemptLine from '../oneCircleInAttemptLine/oneCircleInAttemptLine'
import './oneAttemptLine.css'

function OneAttmptLine(props) {
    // let array = [1, 2, 3, 4]

    const renderCirle = props.selectedColors.map((color) => {
        return <OneCircleInAttemptLine
            // index={number}
            // color={props.from=='viewAttemptLine'?props.colors[number-1]:props.selectedColors[number - 1]}
            color={color}>
        </OneCircleInAttemptLine>
    })
    const renderCirleResult = props.results&&props.results.map((color) => {
        return <OneAttemptLineResult
            color={color}>
        </OneAttemptLineResult>
    })
    const renderCirleAttempt = props.colors ? props.colors.map((color) => {
        return <OneCircleInAttemptLine
            color={color}>
        </OneCircleInAttemptLine>
    }) : null
    return (
        <>
            <div className='container'>
                <div className='row div_circles'>
                    {props.from == 'viewAttemptLine' ? renderCirleAttempt : renderCirle}
                    {props.from == 'viewAttemptLine' ? renderCirleResult : null}
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