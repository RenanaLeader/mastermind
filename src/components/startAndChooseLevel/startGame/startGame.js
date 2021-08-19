import React from 'react'
import ButtonChooseLevel from '../buttonChooseLevel/buttonChooseLevel'
import { Container, Box } from '@material-ui/core';
import './startGame.css'
import { connect } from 'react-redux';
import { actions } from '../../../redux/actions';
function StartGame(props) {

    const levels = ['Easy', 'Medium', 'Difficult']

    const renderLevelsButtons = levels.map((level) => {
        return <ButtonChooseLevel level={level}
            changeChooseLevelToTrue={props.changeChooseLevelToTrue}
            saveLevelInRedux={(level) => { props.saveLevelInRedux(level) }} />
    })
    return (
        <>
            <Box>
                <Container className='box_levels_buttons'>
                    {renderLevelsButtons}
                </Container>
            </Box>
        </>
    )
}
export default connect(
    (state) => {
        return {
        }
    },
    (dispatch) => {
        return {
            saveLevelInRedux: (level) => dispatch(actions.saveLevelInRedux(level))
        }
    }

)(StartGame)