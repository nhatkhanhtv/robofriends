import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json()
        ).then(users=>{
            this.setState({
                robots:users
            });
        });
        
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield:event.target.value
        });
    }

    render()
    {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });

        if(robots.length === 0) {
            return (
                <div className='tc'>
                    <h1>Loading</h1>
                </div>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll >
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}
   

export default App;


// export const AppFunction = () => {
//     const state = {
//         robots:robots,
//         searchfield:''
//     }
//     const onSearchChange = (event) => {
//        state.setState({
//             searchfield:event.target.value
//         });
//     }

//     const filteredRobots = state.robots.filter(robot=>{
//         return robot.name.toLocaleLowerCase().includes(state.searchfield.toLocaleLowerCase());
//     });

//     return (
//         <div className="tc">
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange={onSearchChange} />
//                 <CardList robots={filteredRobots}/>
//             </div>
//     )
// }