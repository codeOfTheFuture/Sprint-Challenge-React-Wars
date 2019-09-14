import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import { Container, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    if (this.state.page < 9) {
      const nextPage = this.state.page + 1;

      this.setState({
        page: nextPage
      });

      this.getCharacters(`https://swapi.co/api/people/?page=${nextPage}`);
    }
  };

  previousPage = () => {
    if (this.state.page > 1) {
      const prevPage = this.state.page - 1;

      this.setState({
        page: prevPage
      });

      this.getCharacters(`https://swapi.co/api/people/?page=${prevPage}`);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Container className="container">
          <div className="buttons">
            <Button className="mx-5" onClick={this.previousPage}>
              Prev
            </Button>
            <div>{this.state.page}</div>
            <Button onClick={this.nextPage} className="mx-5">
              Next
            </Button>
          </div>
          <div className="characters">
            <CharacterList starwarsChars={this.state.starwarsChars} />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
