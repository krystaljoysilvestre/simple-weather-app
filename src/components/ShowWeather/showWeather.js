import React, { Component } from 'react';
import moment from 'moment';

import {
  Wrapper,
  Today,
  City,
  Container,
  NextDays,
  Day,
  WeatherState,
  WeatherIcon,
  Temperature
} from './style';

class ShowWeather extends Component {
  render() {
    const { city, weatherConditions } = this.props;

    return (
      <Wrapper>
        <Today>
          <City>{city}</City>
          <Day large>today</Day>
          <Temperature large>
            {Math.round(weatherConditions[0].min_temp)} °C
            </Temperature>
          <WeatherState large>{weatherConditions[0].weather_state_name}</WeatherState>
        </Today>

        <NextDays>
          {weatherConditions.slice(1).map((item, index) => (
            <Container key={index}>
              <Day>{moment(item.applicable_date).format('dddd')}</Day>
              <WeatherIcon
                alt="weather-icon"
                src={`https://www.metaweather.com/static/img/weather/${
                  item.weather_state_abbr
                  }.svg`}
              />
              <Temperature>
                {Math.round(item.max_temp)} °C/{Math.round(item.min_temp)} °C
              </Temperature>
              <WeatherState>{item.weather_state_name}</WeatherState>
            </Container>
          ))}
        </NextDays>
      </Wrapper>
    );
  }
}

export default ShowWeather;
