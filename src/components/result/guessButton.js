import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function GuessButton(props) {
    const [ifFillFourCircle, setIfFillFourCircle] = useState(false)
    useEffect(() => {
        if (props.selectedColors.length == 4)
            setIfFillFourCircle(true)
            else if(props.selectedColors.length==0)
            setIfFillFourCircle(false)
    }, [props.selectedColors])

    return (
        <>
          <ButtonGroup > <Button disabled={!ifFillFourCircle} onClick={props.checkedAttempt}>guess</Button></ButtonGroup>
          <ButtonGroup > <Button  onClick={props.resetCurrentAttemptData}>reset</Button></ButtonGroup>

            {/* {ifFillFourCircle ?  <ButtonGroup> <Button onClick={props.checkedAttempt}>guess</Button></ButtonGroup>: null} */}
        </>
    )
}
export default connect(
    (state) => {
        return {
            selectedColors: state.game.selectedColors
        }
    },
    (dispatch) => {
        return {
            checkedAttempt: () => dispatch(actions.checkedAttempt()),
            resetCurrentAttemptData:() => dispatch(actions.resetCurrentAttemptData())
        }
    }

)(GuessButton)