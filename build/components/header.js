'use strict';

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Agile</h1>
                <ul className = 'nav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = Header;