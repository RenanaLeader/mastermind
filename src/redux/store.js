import { createStore } from 'redux'
import appReducers from './reducers/appReducers';
const store = createStore(
  appReducers,
//   composeWithDevTools(applyMiddleware(...appMiddleware))
)
window.store=store
export default store;