import React, { Component } from 'react';
import './App.css';
import BusinessList from '../src/BusinessList/BusinessList';
import SearchBar from '../src/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const buisnesses = [business, business, business, business, business, business];

class App extends Component {
  searchYelp(term = "Pizza", location = "brooklyn", sortBy = "best_match"){
    console.log(`Searching Yelp with ${term} , ${location} and ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList buisnesses={buisnesses}/>
      </div>
    );
  }
}

export default App;
