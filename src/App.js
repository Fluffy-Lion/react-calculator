//ATTENTION 
// DO NOT FORGET, NPM INSTALL FOR NODE MODULES
  //     ༼ つ ◕_◕ ༽つ
  //   ༼ つ ◕_◕ ༽つ
  // ༼ つ ◕_◕ ༽つ
import React, { Component } from 'react'
import './App.css';
import Button from './components/Button'
import { Input } from './components/Input'
import { Clear } from './components/Clear'
import * as math from 'mathjs'


class App extends Component {
  state = {
    input: ""
  }
 //update input value
  addToInput = (value) => {
    if(value === "x"){
      value = "*"
    }
    this.setState({input: this.state.input + value})
  }

  handleClear = () => {
    this.setState({input: ""})
  }

  handleEqual =() => {
    this.setState({input: math.evaluate(this.state.input)})
  }
  handleMultiply = () => {
    
  }

  render(){
  return (
    <div className="App">
        <div className="buttonWrap">
        <Input input={this.state.input}/>
          <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
          </div>  
          <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>x</Button>
          </div>  
          <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
          </div>  
          <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
          </div>  
          <div className='row'>
          <Clear handleClear={this.handleClear}>clear</Clear>
          </div>
        </div>
    </div>
  )
  }
}

export default App;
