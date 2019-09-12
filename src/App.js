import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';

import { saveLocation } from './actions/locationAction';

import SearchLocation from './components/SearchLocation/searchLocation';
import ShowWeather from './components/ShowWeather/showWeather';

import './App.css';

import { Wrapper, Header, Heading, Content, Body, Loader } from './style';

class App extends Component {
  componentWillMount() {
    const { location, saveLocation } = this.props;

    if (!location.city) {
      saveLocation('Manila', 1199477);
    }

  }

  render() {
    const { location } = this.props;

    return (
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
                />)
                : (<Loader />)
              }
            </Body>
          </Content>
        </Container>
      </Wrapper>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
