import React, { Component } from 'react';
import actions from '../../../services'

class friends extends Component {
    state={
        users:[]
    }
    async componentDidMount() {
    let res = await actions.findFriends(this.state)
    // console.log("find friends",res)
    this.setState({
        users:res.data.users
    })  
    }

    displayUsers = () =>{
        return this.state.users.map((eachUser) => {
            // console.log(eachUser)
            return <div>
                <li>
                    {eachUser.firstname}
                    <button onClick={() => this.addFriend(eachUser)}>Add Friend</button>
                    <button onClick={() => this.removeFriend(eachUser)}>Remove Friend</button>
                </li>
            </div>
        })
    }

    addFriend = async (friend) =>
    {
        let res = await actions.addFriend(friend)
        // console.log(res)
    }

    removeFriend = async(friend) => {
        let res = await actions.removeFriend(friend)
        // console.log(res)
    }

    render() {
        return (
            <div>
                {this.displayUsers()}
            </div>
        );
    }
}

export default friends;