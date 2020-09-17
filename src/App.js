import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }
  //life cycle methods.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }

  handleChange = event => this.setState({ searchTerm: event.target.value })
  render() {
    const { monsters, searchTerm } = this.state

    const filterTerm = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>ZoMBie LanD!!! :)</h1>

        <SearchBox
          placeholder='Search Monsters ...'
          handleChange={this.handleChange}
        />

        <CardList monsters={filterTerm} />
      </div>
    )
  }
}

export default App
