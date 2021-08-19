import React from 'react'
import { connect } from 'react-redux'
import oneAttemptLine from '../../oneLine/oneAttemptLine/oneAttemptLine'
import OneAttmptLine from '../../oneLine/oneAttemptLine/oneAttemptLine'

//The user  see all of their previous attempts and results.

function ListAttempt(props)
{
    const renderListAttempts =  props.listAttempts.map((attempt) => {
        return <OneAttmptLine
        from='viewAttemptLine' 
        colors={attempt.colors}
        results={attempt.result}
        />
    })
    
    return(
        <>
        <div>
        {renderListAttempts}
        </div>
        </>
    )
}
export default connect(
    (state) => {
        return {
            listAttempts: state.game.listAttempts
        }
    },
    (dispatch) => {
        return {
        }
    }

)(ListAttempt)