import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
   name:''
}
const users = {
        setUserName(state, action) {
        state.name = action.payload
        }
};

export default produce((state, action) => createReducer(state, action, users), initialState);

