import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import errors from '../../data/errors'
import { actions } from '../../redux/actions';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
//this components for all messages displayed to the user
function ErrorMessage(props) {
    const classes = useStyles();
   
    const handleClose = () => {
        props.clearError()
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.error.hasError}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.error.hasError}>
                    <div className={classes.paper}>
                        {props.error.item != 3 ? <h2 id="transition-modal-title">oops</h2> :
                            <EmojiEmotionsIcon style={{ color: 'yellow', width: '50px', height: '50px' }} />}{/*3=win*/}
                        <p id="transition-modal-description">{errors[props.error.item]}</p>
                        {/* in win */}
                       {props.error.item == 3? <p id="transition-modal-description">after {props.numAttempt} attempts</p>:null}


                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default connect(
    (state) => {
        return {
            error: state.game.error,
            numAttempt: state.game.numAttempt
        }
    },
    (dispatch) => {
        return {
            clearError: () => { dispatch(actions.clearError()) }
        }
    }

)(ErrorMessage)

