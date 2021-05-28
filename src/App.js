import React from 'react';
import './App.css';
import Sequence from "./Components/Sequence";
import Contact from "./Components/Contact";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { num: '' };
  }
  myChangeHandler = (event) => {
    this.setState({num: event.target.value});
  }
  render() {
    var num = this.state.num;
    if (num > 10000) {
      alert("Input should be less than or equal to 10000");
      num = 1000;
    }
    var fib = [[0], [1]];
    function convert(arr, length){
      for(let i = 0; i < length; i++){
        if(arr[i] === undefined){
          arr[i] = 0;
        }
      }
      return arr;
    }
    function add(arr1, arr2) {
      if(arr1.length > arr2.length){
        arr2 = convert(arr2, arr1.length);
      }
      else if(arr1.length < arr2.length){
        arr1=convert(arr1, arr2.length);
      }
      var sum = [];
      var transfer=0;
      for(let i = 0; i < arr1.length; i++){
        if((arr1[i] + arr2[i]) + transfer < 10){
          sum[i] = arr1[i] + arr2[i] + transfer;
          transfer = 0;
        }
        else{
          sum[i] = (arr1[i] + arr2[i] + transfer) % 10;
          transfer = 1;
        }
      }
      if(transfer){
        sum.push(transfer);
      }
      return sum;
    }
    function Fibonacci(num) {
      for (let i = 2; i <= num; i++) {
        fib.push(add(fib[i - 1], fib[i - 2]));
      }
      return fib[num];
    }

    function translateToString(arr){
      var str = "";
      for (let i = arr.length-1; i>=0; i--){
        str = str + arr[i];
      }
      return str;
    }

    return (
      <>
      <div className="Container">
        <div className="title">
          <h2>Nth Fibonacci Calculator</h2>
        </div>
        <div className = "inputArea">
          <label>Nth Index to Obtain * : </label>
          <input type="text" onChange={this.myChangeHandler} placeholder = "0" autoFocus required></input>
        </div>
        <div className="result">
          <Sequence
            val={num}
            ans={translateToString(Fibonacci(Number(num)))}
          />
        </div>
        </div>
        <div><Contact/></div>
      </>
    );
  }
}
export default App;
