import React , {Component} from 'react';
import Counter from './Components/Counter'
import Congrats from './Components/Congrats';

 class App extends Component {

  render() {
    return(
      <div>
      <Counter/>
      <Congrats/>  
      </div>
    )
  }
}

export default App