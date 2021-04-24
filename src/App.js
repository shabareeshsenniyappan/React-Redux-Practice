import GetInput from './Components/GetInput'
import {Provider} from 'react-redux'
import './App.css';
import store from './Redux/store';
import DisplayInput from './Components/DisplayInput';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <GetInput/>
      <DisplayInput/>
    </div>
    </Provider>
  );
}

export default App;
