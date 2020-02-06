import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';

import { saveLocation } from './actions/locationAction';

import PushNotification from './components/PushNotification/pushNotification';
import SearchLocation from './components/SearchLocation/searchLocation';
import ShowWeather from './components/ShowWeather/showWeather';

import './App.css';

import { Wrapper, Header, Heading, Content, Body, Loader } from './style';

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        {location.weatherConditions &&
          location.weatherConditions.length > 0 && (
            <PushNotification
              title={`${location.weatherConditions[0].weather_state_name} in ${location.city}`}
              icon={`https://www.metaweather.com/static/img/weather/png/64/${location.weatherConditions[0].weather_state_abbr}.png`}
            />
          )}

        <Wrapper>
          <Container>
            <Content>
              <Header>
                <Heading>Simple Weather App</Heading>
                <SearchLocation />
              </Header>

              <Body>
                {location.city ? (
                  <ShowWeather
                    city={location.city}
                    weatherConditions={location.weatherConditions}
                  />
                ) : (
                  <Loader />
                )}
              </Body>
            </Content>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

function mapStateToProps({ location }) {
  return {
    location
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveLocation
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
