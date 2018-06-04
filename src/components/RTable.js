import React from 'react';
import PropTypes from 'prop-types';
import RHeader from './RHeaderTest';
import RBody from './RBody';

class RTable extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <table>
          {this.props.headerRender(this.props.columns)}
          {this.props.bodyRender(this.props.data)}
        </table>
      </div>
    );
  }
}

RTable.defaultProps = {
  headerRender: columns => <RHeader columns={columns} />,
  bodyRender: data => <RBody data={data} />,
};

RTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  headerRender: PropTypes.func,
  bodyRender: PropTypes.func,
};

export default RTable;
