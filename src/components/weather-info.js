import React from "react";

import fetchWeather from "./fetchWeather";

class WeatherInfo extends React.Component {
  state = {
    weather: null,
    error: null
  };

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");
    this.getWeather(query);
  }

  getWeather = async query => {
    const d = await fetchWeather(query);
    console.log(d.data);
    if (d.status === 200) this.setState({ weather: d.data, error: null });
    else this.setState({ error: d.data, weather: null });
  };

  render() {
    const { weather, error } = this.state;
    return (
      <div className="weather-info">
        {weather && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {(weather.main.temp / 10).toFixed(1)} C
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${
                  weather.weather[0].icon
                }@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
        {error && <h2 className="not-found">City not found</h2>}
      </div>
    );
  }
}

export default WeatherInfo;
