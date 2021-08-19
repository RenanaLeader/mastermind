import React from 'react'
import FileSaver from 'file-saver';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from 'react-redux';

function ButtonExport(props) {
    function handleExport() {
        const csv = `num Win: ${props.numWin} num Lose: ${props.numLose}`//convertContactsToCSV(contacts);
        const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        FileSaver.saveAs(csvData, 'data.csv');
    }
    return(
        <>
        <ButtonGroup>
        <Button onClick={handleExport}>export data</Button>
        </ButtonGroup>
        </>
    )
}
export default connect(
    (state) => {
        return {
            numLose:state.game.numLose,
            numWin:state.game.numWin
        }
    },
    (dispatch) => {
        return {
        }
    }

)(ButtonExport)

