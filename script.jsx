var Product = React.createClass({
    ProductClick: function() {
        this.props.ProductClick(this.props.id);
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var component = this;
        $.get("https://api.github.com/users/boringtaoxh", function(data) {
            component.setState(data);
        });
    },
    render: function() {
        return (
            <div onClick={this.ProductClick}>
                <img src={this.state.avatar_url} width="80" />
                <h3>{this.props.id} {this.state.name}</h3>
            </div>
        );
    }
});

var Result = React.createClass({
    render: function() {
        return (
            <div>Product {this.props.ProductId}</div>
        )
    }
});

var ProductsBlock = React.createClass({
    getInitialState: function() {
        return {
            productId: null
        };
    },
    productClick: function(id) {
        this.setState({ productId: id });
    },
    render: function() {
        return (
            <section>
                <Product ProductClick={this.productClick} id={1} />
                <Product ProductClick={this.productClick} id={2} />
                <Product ProductClick={this.productClick} id={3} />
                <Product ProductClick={this.productClick} id={4} />
                <Result ProductId={this.state.productId} disable={false} />
            </section>


        )
    }
})

React.render(<ProductsBlock />, document.getElementById("main"));