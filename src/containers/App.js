import React, { Component } from 'react';
import RobotList from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App';



class App extends Component{
    constructor () {
     super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({robots: users}));


}

    onSearchChange = (event) => {
      this.setState({ searchField: event.target.value})
      
    
    }

    render () {
        const { robots, searchField} = this.state;
        const filteredRobots = robots.filter (robotics =>{
            return robotics.name.toLowerCase().includes(searchField.toLowerCase())
          });
          if (robots.length === 1) {
             return <h1>Loading</h1>
          } else {
        return (
            <div className ='tc'>
                <h1 className = 'p2 dark-blue'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} /> 
                <Scroll>
                    <ErrorBoundary>
                <RobotList  robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                
            </div>
          
            );
        }
    }
    
}

export default App;