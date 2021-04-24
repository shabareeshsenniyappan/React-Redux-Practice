import {createStore} from 'redux'
import nameReducer from './nameReducer'


const store=createStore(nameReducer)

export default store