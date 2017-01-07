let React = require('react');
let TableHead = require('./TableHead.js');
let TableBody = require('./TableBody.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      users: []
    };
  },

  componentDidMount: function() {
    let url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      this.setState({users: xhr.response})
    };
    xhr.send();

    /*
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        this.setState({users: arr});
        console.log(this.state.users[0].username);
      });
      */
  },

  render: function() {
    return(
        <table>
          <TableHead />
          <TableBody users={this.state.users} />
        </table>
    )
  }

});
