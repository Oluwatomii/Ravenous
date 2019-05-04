import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    BestMatch: 'best_match',
    HighestRated: 'rating',
    MostReviewed: 'review_count'
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term : '',
            location : '',
            sortBy : 'best_match'
        }; 
        this.handleTermChanges = this.handleTermChanges.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy ===  sortByOption){
            return 'active';
        }
        return '';
    }
    handleSortByChange(sortByOption){
        this.setState({
            sortBy : sortByOption
        })
    }

    handleTermChanges(event){
        this.setState({
            term: event.target.value
        })
    }
    handleLocationChange(event){
        this.setState({
            location: event.target.value
        })
    }
    handleSearch(event){
        if(this.state.term === "" || this.state.location === ""){
            alert("Business or location missing. Please input a value");
            return;
        }
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}> {sortByOption} </li>;
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <form action = "submit">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChanges} placeholder="Search Businesses" required/>
                    <input onChange={this.handleLocationChange}placeholder="Where?" required/>
                </div>
                <div className="SearchBar-submit">
                    <button type="submit" onClick={this.handleSearch}>Let's Go</button>
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;