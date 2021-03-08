import React,{Component} from 'react';
import './App.css';
import { navBar } from './Component/NavBar';
import { sideBar} from './Component/SideBar';
import { desk } from './Component/Desk';

export default class App extends Component{
  render(){
    return (
      <div className="App">
        {navBar()}
        {sideBar()}
        {desk()}
      </div>
    );
  }
}

