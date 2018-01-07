import React, { Component } from 'react';
import SparklineChart from '../components/sparkline-chart';
import GoogleMap from '../components/google-map';

class WeatherListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { city } = data;
    const { lat, lon } = city.coord;
    const temperature = data.list.map(item => item.main.temp);
    const pressure = data.list.map(item => item.main.pressure);
    const humidity = data.list.map(item => item.main.humidity);

    return (
      <tr>
        <td><GoogleMap lat={ lat } lng={ lon }/></td>
        <td><SparklineChart data={ temperature } color="green" type="avg" unit="K" /></td>
        <td><SparklineChart data={ pressure } color="orange" type="avg" unit="hPa" /></td>
        <td><SparklineChart data={ humidity } color="black" type="avg" unit="%" /></td>
      </tr>
    );
  }
}

export default WeatherListItem;
