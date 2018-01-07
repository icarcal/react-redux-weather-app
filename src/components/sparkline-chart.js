import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return (_.sum(data)/data.length).toFixed(0);
}

class SparklineChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, color, type, unit } = this.props;

    return (
      <div>
        <Sparklines data={ data } height={120} width={180} >
          <SparklinesLine color={ color } />
          <SparklinesReferenceLine type={ type } />
        </Sparklines>
        <div>{ average(data) } { unit }</div>
      </div>
    );
  }
}

export default SparklineChart;
