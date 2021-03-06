import React from 'react';
import PropTypes from 'prop-types';

class RHeader extends React.Component {
  render() {
    const headers = this.props.columns.map(column => <th key={column.id}>{column.name}</th>);
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

RHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default RHeader;
