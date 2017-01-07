let React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Past 30 Days Points</th>
          <th>All-Time Points</th>
        </tr>
      </thead>
    );
  }
});
