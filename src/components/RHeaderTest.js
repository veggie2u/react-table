import React from 'react';
import PropTypes from 'prop-types';

class RHeaderTest extends React.Component {
  render() {
    const headers = this.props.columns.map(column => <th key={column.id}>Header</th>);
    return (
      <React.Fragment>
        <thead>
          <tr>
            { headers }
          </tr>
        </thead>
      </React.Fragment>
    );
  }
}

RHeaderTest.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default RHeaderTest;
