import React from 'react';
import PropTypes from 'prop-types';

class RTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table>
          {this.props.children}
        </table>
      </React.Fragment>
    );
  }
}

RTable.defaultProps = {
  children: {},
};

RTable.propTypes = {
  children: PropTypes.node,
};

export default RTable;
