import {connect} from 'react-redux'

const DisplayInput = (props) => {
    console.log(props.fname);
    return (
        <div>
           {/* <h1> {props.fname}</h1>? */}
           {
               props.fname.map(e=>{
                   return <h1 key={e}>{e}</h1>
               })
           }
        </div>
    );
}




const mapStateToProps = state => {
    return{
        fname :state.fname
    }
}

export default connect(mapStateToProps)(DisplayInput);