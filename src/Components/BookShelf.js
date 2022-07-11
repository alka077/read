import React, { Component } from 'react'

class BookShelf extends Component {
    state = {
        value: this.props.shelf
    };
    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
        this.props.onMove(this.props.book, value);
    };
    render() {
        console.log('Props', this.props)
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        {this.props.bookselves.map((bookselve) => (
                            <h2 className="bookshelf-title" key={bookselve.title}>{bookselve.title}
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                                            <div className="book-shelf-changer">
                                                <select value={this.state.value} onChange={this.handleChange}>
                                                    <option value="move" disabled>
                                                        Move to...
                                                    </option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">To Kill a Mockingbird</div>
                                        <div className="book-authors">Harper Lee</div>
                                    </div>
                                </li>
                            </h2>
                        ))}
                    </div>
                </div>
            </div>


        )
    }
}

export default BookShelf;
