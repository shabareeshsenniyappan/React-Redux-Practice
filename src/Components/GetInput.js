import React,{useRef} from 'react';
import {connect} from 'react-redux'
import showName from '../Redux/nameAction';

const GetInput = (props) => {
    const a=useRef('')
    return (
        <div>
            <form onSubmit= { (e) => {
                e.preventDefault()
                console.log(a.current.value);
                props.showName(a.current.value)
                
            }}>
            Name* : {"\t"}
                    <input type="text" placeholder="Enetr Your Name"  ref={a} required/>
                    <button type="submit">submit</button>
                    </form>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        fname :state.fname
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showName :data =>dispatch(showName(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetInput);


