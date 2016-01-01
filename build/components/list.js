'use strict';

var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var rootUrl = 'https://alt-data.firebaseio.com/';

var ItemList = React.createClass({
    render: function() {
        var items = this.props.data.map(function (item, index) {
            return <li key={index}>{item.uid}</li>;
        });
        return <ul className="commentList">{items}</ul>;
    }
});

var List = React.createClass({
    mixins: [ReactFireMixin],

    getInitialState: function() {
        return {
            items: []
        };
    },

    componentWillMount: function() {
        var ref = new Firebase(rootUrl + 'users');
        this.bindAsArray(ref, 'items');
    },

    render: function() {
        return (
            <div>
                <h1>List</h1>
                <ItemList data={this.state.items} />
            </div>
        );
    }
});

module.exports = List;