import {SHOW_NAME} from './nameType'

const initState ={
    fname:[],
}

const nameReducer= (state = initState,action) => {
    switch (action.type) {
        case SHOW_NAME:
            let a=[...state.fname,action.payload]
            return {
                ...state,
                fname:a,
            }
    
            //     ...state,
            //     fname:[action.fname.push(action.payload)],
            // }
    
        default: return state;
    }

}
export default nameReducer