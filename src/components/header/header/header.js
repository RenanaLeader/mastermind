import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../redux/actions'
import ColorsComputerChoose from '../colorsComputerChoose/colorsComputerChoose'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box } from '@material-ui/core';

function Header(props) {
    const [openColorsComputerChoose, setOpenColorsComputerChoose] = useState(false)

    const genereteColors = () => {
        setOpenColorsComputerChoose(true)
        props.fillComputerColors()
        props.clearData()
    }
    return (
        <>
            
            <div>
                <ButtonGroup>
                    <Button onClick={genereteColors}>New Game</Button>
                </ButtonGroup>
            </div>
            {openColorsComputerChoose ?
                <ColorsComputerChoose></ColorsComputerChoose>
                : null}

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
            fillComputerColors: () => dispatch(actions.fillComputerColors()),
            clearData: () => dispatch(actions.clearData())
        }
    }

)(Header)