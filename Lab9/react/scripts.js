
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isBookmarked: this.props.isBookmarked }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({ isBookmarked: !prevState.isBookmarked }));
    }
    render() {
        return (
            <div className={this.props.display ? (this.state.isBookmarked ? 'box yellow' : 'box') : "nodisplay"}>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <button onClick={this.handleClick}>
                    {this.state.isBookmarked ? 'Remove bookmark' : 'Set bookmark'}
                </button>
            </div>
        );
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var listItems = [];
        this.props.products.forEach((p) => {
            var txt = this.props.searchText.toLowerCase();
            var n = p.name.toLowerCase();
            var desc = p.description.toLowerCase();
            listItems.push(<Product name={p.name} description={p.description} isBookmarked={p.isBookmarked} display={(txt == "" || n.indexOf(txt) > -1 || desc.indexOf(txt) > -1)} />
            );

        }
        );
        return (<div>{listItems}</div>);
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputTextChanged = this.handleInputTextChanged.bind(this);
    }
    handleInputTextChanged(e) {
        this.props.onSearch(e.target.value);
    }
    render() {
        return <input type="text" placeholder="Input text to search" onChange={this.handleInputTextChanged} />;
    }
}

class SearchableProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: "" };
        this.doSearch = this.doSearch.bind(this);
    }
    doSearch(txt) {
        this.setState({ searchText: txt });
    }
    render() {
        return <div>
            <SearchBar onSearch={this.doSearch} />
            <ProductList products={this.props.products} searchText={this.state.searchText} />
        </div>;
    }
}

ReactDOM.render(
    <SearchableProductList products={[{ name: "Dell Laptops", description: "Laptops from Dell", isBookmarked: false }, { name: "Dell PCs", description: "PCs from Dell", isBookmarked: true }, { name: "HP Laptops", description: "Laptops from HP", isBookmarked: false }]} />,
    document.getElementById('root')
);