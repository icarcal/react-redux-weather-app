import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherListItem from '../components/weather-list-item';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name } = cityData.city;

    return <WeatherListItem key={ name } data={ cityData } />
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
