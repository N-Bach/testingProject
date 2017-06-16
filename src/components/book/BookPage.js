import React from 'react';
import { connect } from 'react-redux';
import * as BookActions from '../../actions/bookActions';
import BookForm from './BookForm';
import { Link } from 'react-router';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input);
  }

  render() {
    // let titleInput;
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <tr>
                <td>Title</td>
                <td />
              </tr>
            </thead>
            <tbody>
              {this.props.books.map((b, i) => (
                <tr key={i}>
                  <td>{b.title}</td>
                  <td><Link to={`/books/${b.id}`}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
          <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapActionToProps = dispatch => {
  return {
    createBook: book => dispatch(BookActions.createBook(book))
  };
};

export default connect(mapStateToProps, mapActionToProps)(Book);
