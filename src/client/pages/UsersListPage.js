import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from "../actions/index"

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
        <div>
          A big list of users
          <ul>{this.renderUsers()}</ul>
        </div>
    )
  }
}

const mstp = (state) => ({users: state.users});

/* This is the function signalling to us that it's
gonna load some data for this particular component */
function loadData(store) {
  // we return a promise representing network request
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mstp, { fetchUsers })(UsersList),
};
