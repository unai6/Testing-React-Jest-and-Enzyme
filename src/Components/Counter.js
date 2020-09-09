
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter:5,
      error:''
    }
  };

 render() {
   const counter = this.state.counter
   let error = this.state.error
   if(counter === 0) {
     error = 'No puedes bajar de 0'
   }else if(counter < 0){
     
     this.setState({counter:5})
   }

   return (
     <div data-test='component-app'>
     <h1 data-test='counter-display'> The counter is {this.state.counter}</h1>
     <p data-test='error-render'>{error}</p>
       <button data-test='decrement-button' onClick={() => {this.setState({counter: this.state.counter - 1})}}> Decrement Button</button>
       
     </div>
   )
 }
}

export default Counter