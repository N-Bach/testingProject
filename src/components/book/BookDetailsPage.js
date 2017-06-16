import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookDetails from './BookDetails';
import { fetchBookById } from '../../actions/bookActions';

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchBookById(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h1>Book Detail Page</h1>
        <BookDetails book={this.props.book} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookById: bookId => dispatch(fetchBookById(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
