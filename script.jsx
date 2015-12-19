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
            <div>Product {this.props.product}</div>
        )
    }
});

var ProductsBlock = React.createClass({
    getInitialState: function() {
        return {
            products: ['boringtao', 'boringtaoxh'],
            product: 'undefined'
        };
    },
    productClick: function(id) {
        this.setState({ product: id });
    },
    render: function() {
        var results = this.state.products;
        var products = [];
        for (var i=0; i < results.length; i++) {
            products.push(
                <Product ProductClick={this.productClick} key={results[i]} id={results[i]} />
            );
        }
        return (
            <section>
                {products}
                <Result product={this.state.product} disable={false} />
            </section>


        )
    }
})

React.render(<ProductsBlock />, document.getElementById("main"));