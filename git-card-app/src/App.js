import React from 'react';
import axios from 'axios'; 
import GitUser from './components/GitUser'; 
import GitFollower from './components/GitFollower';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: [],
      followers: []
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/ArtmanG').then(res => {
      console.log('res', res);
      this.setState({
        user: res.data
      })
    })
    axios.get('https://api.github.com/users/benjberg/followers').then(res =>{
      console.log('follow res', res.data);
      this.setState({
        followers: res.data
      })

    })
  }
  render() {
    return(
      <div className="App">
        <GitUser user={this.state.user} />
        <GitFollower followers={this.state.followers}/>
       
       </div> 
  
    );
  }
};
