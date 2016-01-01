$ = jQuery = require('jquery');

var React = require('react');
var ReactDom = require('react-dom');
var Index = require('./components/index');
var About = require('./components/about');

var App = React.createClass({
    render: function() {
        var Child;

        switch (this.props.route) {
            case 'about': Child = About; break;
            default: Child = Index;
        }

        return (
            <Child />
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    ReactDom.render(<App route={route} />, document.getElementById('main'));
}

window.addEventListener('hashchange', render);
render();