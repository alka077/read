import React, { Component } from 'react';
import BookShelf from "./Components/BookShelf";



class App extends Component {
  state = {
    bookselves: [
      {
        "title": "Currently Reading",
        "value": "Currently Reading"
      },
      {
        "title": "Want to Read",
        "value": "Want to Read"
      },
      {
        "title": "Read",
        "value": "Read"
      },
    ]
  }
  render(){
  return (
    <div className="App">
      <BookShelf bookselves={this.state.bookselves} />
    </div>
  );
}
}
export default App;
