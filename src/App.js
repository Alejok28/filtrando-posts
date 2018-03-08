import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts,
      keyword: ''
    }
  }

  filteredPosts(word) {
    return this.state.posts.filter( post => {
      return post.title.toLowerCase().indexOf(word.toLowerCase()) !== -1
    })
  }

  handleChange(e) {
    const word = e.target.value
    this.setState({
      keyword: word,
      posts: word ? this.filteredPosts(word) :posts
    });
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input
            type="text"
            placeholder="Ingresa el término de búsqueda"
            value={this.state.keyword}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <ul>
          {this.state.posts.map( post => {
            return (
              <li key={post.title}>
                <a href={post.url}><img alt={post.title} src={post.image } /></a>
                <p>{ post.title }</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default App
