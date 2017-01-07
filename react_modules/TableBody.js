let React = require('react');

module.exports = React.createClass({
  render: function() {
    let tableRows = this.props.users.map((n, index) => {
      console.log(n, index);
      return (
        <tr key={index}>
          <td>{n.username}</td>
          <td>{n.recent}</td>
          <td>{n.alltime}</td>
        </tr>
      );
    });
    return (
      <tbody>
        {tableRows}
      </tbody>
    );
  }
});
