import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/ SignUp'
import Welcome from './components/Welcome'
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inSignedUp: false
    }
  }

  authChangeCallBack = () =>{
    this.setState({isSignedup: true})
  }

  showWelcome = () => {
  if(this.state.isSignedup){
    return <Welcome/>
  }
    else {
      return <SignUp userAuthChanged={this.authChangeCallBack}/>
  }
  }

  render(){
    return (
      <div className="App">
    {this.showWelcome()} 
    </div>
    )
    }
}


export default App;
