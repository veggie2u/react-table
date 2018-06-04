import React from 'react';
import PropTypes from 'prop-types';

class RBody extends React.Component {
  render() {
    const rows = this.props.data.map(row => (
      <tr key={row.id}>
        <td>{row.first}</td>
        <td>{row.last}</td>
        <td>{row.book}</td>
        <td>{row.food}</td>
      </tr>
    ));
    return (
      <React.Fragment>
        <tbody>
          {rows}
        </tbody>
      </React.Fragment>
    );
  }
}

RBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default RBody;
