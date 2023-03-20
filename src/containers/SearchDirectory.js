import React, {Component} from "react";
import {users} from '../lib/users';
import UserDirectory from '../components/UserDirectory';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: users,
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState( {users:users} )
    }

    onSearchChange = (event) => {
        this.setState( {searchfield: event.target.value})
    }

    render() {
        const filteredUsers = this.state.users.filter(user => {
            return (
                user.firstname.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) ||
                user.position.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) ||
                user.lastname.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
            ) 
        })

        if( this.state.users.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1>Wothy Users</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <UserDirectory users={filteredUsers}/>
                    </Scroll>
                </div>
            );   
        }
        
    }
}

export default App;