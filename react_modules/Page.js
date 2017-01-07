let React = require('react');
let Banner = require('./Banner.js');
let Table = require('./Table.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Banner />
        <Table />
      </div>
    );
  }
});
