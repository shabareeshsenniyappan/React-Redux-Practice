import {SHOW_NAME} from './nameType'
const showName = data =>{
    return {
        type :SHOW_NAME,
        payload :data,
    }
}

export default showName