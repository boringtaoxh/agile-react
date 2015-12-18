var Product = React.createClass({
    ProductClick: function() {
        this.props.ProductClick(this.props.id);
    },
    render: function() {
        return (
            <button onClick={this.ProductClick}>Product {this.props.id}</button>
        )
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