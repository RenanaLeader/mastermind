import produce from 'immer';
import colors from '../../data/colors';
import createReducer from './reducerUtils';

const initialState = {
        selectedColors: [],//user select colors in each attempt
        computerColors: [],//computer generate colors in start
        resultAttempt: [],//the player receives a result 
        listAttempts: [],//all attempts
        numAttempt: 1,//num attempt in each play,
        numWin: 0,
        numLose: 0,
        error: { hasError: false },
        numLevel: 7
}
const game = {
        setSelectedColors(state, action) {
                if (state.computerColors.length > 0)//the computer yet not generate
                        if (state.selectedColors.length < 4) {//player click more than 4 colors
                                if (state.selectedColors.includes(action.payload)) {
                                        state.error.hasError = true
                                        state.error.item = 0//index of message in errors array
                                }
                                else
                                        state.selectedColors.push(action.payload)
                        }
                        else {
                                state.error.hasError = true
                                state.error.item = 2//index of message in errors array
                        }
                else {
                        state.error.hasError = true
                        state.error.item = 1//index of message in errors array
                }
        },
        fillComputerColors(state, action) {
                let i;
                for (i = 0; i < 4; i++) {
                        let color = colors[Math.floor(Math.random() * state.numLevel)]
                        while (state.computerColors.includes(color)) {//to genrete differents colors
                                color = colors[Math.floor(Math.random() * state.numLevel)]
                        }
                        state.computerColors[i] = color
                }
        },
        checkedAttempt(state, action) {
                state.selectedColors.forEach((color, index) => {
                        if (color == state.computerColors[index])
                                state.resultAttempt[index] = '#000000'
                        else if (state.computerColors.includes(color))
                                state.resultAttempt[index] = '#ffffff'
                        else
                                state.resultAttempt[index] = '#ff0000'
                });
                //check if player win
                if (!state.resultAttempt.includes('#ffffff') && !state.resultAttempt.includes('#ff0000')) {
                        state.error.hasError = true
                        state.error.item = 3//index of message in errors array
                        state.numAttempt = 1
                        state.numWin++
                        state.listAttempts = []
                        state.selectedColors = []
                        state.resultAttempt = []
                }
                else
                        state.numAttempt++
                state.listAttempts.push({ "colors": state.selectedColors, 'result': state.resultAttempt })
                state.selectedColors = []
                state.resultAttempt = []
                //user lost
                if (state.numAttempt >= 10) {
                        state.error.hasError = true
                        state.error.item = 4//'You Lost'
                        state.listAttempts = []
                        state.numLose++;
                        state.selectedColors = []
                        state.numAttempt = 1
                }
        },
        clearData(state, action) {
                state.listAttempts = []
                state.selectedColors = []
        },
        resetCurrentAttemptData(state, action) {
                state.selectedColors = []
        },
        clearError(state, action) {
                state.error.hasError = false
        },

        //bonus-levels
        saveLevelInRedux(state, action) {
                debugger
                switch (action.payload) {
                        case 'MEDIUM':
                                state.numLevel = 10
                                break;
                        case 'DIFFICULT':
                                state.numLevel = 12
                                break;
                        default: state.numLevel = 7
                                break;
                }


        }

};

export default produce((state, action) => createReducer(state, action, game), initialState);

