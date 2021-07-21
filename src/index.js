import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App" ;
//import Car from "./CarCom"






ReactDOM.render(<App /> , document.getElementById('root') ) ;




/*
const myfirstelement = <h1>Hello React!</h1>
let test = <section id = "ali" >ali kiri</section>

/*
class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
}*/
/*
function Car1 () {
    return <h2>it's a red Car!</h2>;
}
class Clothes extends React.Component {
    constructor() {
        super() ;
        this.state = {color:"blue"}
    }
    render () {
        return <h2> I am a {this.state.color} clothes! </h2>;
    }
}
class Cup extends React.Component {
    render() {
        return <h2>i am a {this.props.kirekhar} cup</h2> ;
    }
}
class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>who is in my Garage?</h1>
                < Cup kirekhar = "red" />
            </div>
        ) ;
    }
}
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(myfirstelement , document.getElementById('root'))
//ReactDOM.render(test , document.getElementById("ali"))
//ReactDOM.render(<Car /> , document.getElementById('root')) ;
//ReactDOM.render(<Car1 /> , document.getElementById('root')) ;
//ReactDom.render ( <Clothes /> , document.getElementById('root'));
//ReactDOM.render(<Cup color="red" /> , document.getElementById('root'))
ReactDOM.render(<Garage /> , document.getElementById('root'))
*/
/*
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));
*/
/*  
class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
  ReactDOM.render(<Container />, document.getElementById('root'));*/