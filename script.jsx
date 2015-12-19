var Product = React.createClass({
    ProductClick: function() {
        this.props.ProductClick(this.props.id);
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var component = this;
        $.get("https://api.github.com/users/" + this.props.id, function(data) {
            component.setState(data);
        });
    },
    render: function() {
        return (
            <div onClick={this.ProductClick}>
                <img src={this.state.avatar_url} width="80" />
                <h3>{this.state.name}</h3>
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
            productIds: ['boringtao', 'boringtaoxh'],
            productId: 'undefined'
        };
    },
    productClick: function(id) {
        this.setState({ productId: id });
    },
    render: function() {
        var results = this.state.productIds;
        var products = [];
        for (var i=0; i <= 1; i++) {
            products.push(
                <Product ProductClick={this.productClick} key={results[i]} id={results[i]} />
            );
        }
        return (
            <section>
                {products}
                <Result ProductId={this.state.productId} disable={false} />
            </section>


        )
    }
})

React.render(<ProductsBlock />, document.getElementById("main"));