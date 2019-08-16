import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetLocation } from './actions/locationAction';

import { Container, Col } from 'reactstrap';

import SearchLocation from './components/SearchLocation/searchLocation';
import ShowWeather from './components/ShowWeather/showWeather';
import Node from './components/Node/node';

import './App.css';

import { Wrapper, Card, Button, Center, Root, Hierarchy } from './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: []
    };
  }

  produceNode = () => {
    this.setState({
      nodes: [...this.state.nodes, { title: 'test' }]
    });
  };

  render() {
    const { nodes } = this.state;

    return (
      <Wrapper>
        {/* <Root
          onClick={() => {
            this.produceNode();
          }}
        >
          Root
        </Root> */}

        {/* <Hierarchy>
          {nodes.map((node, index) => (
            <Node>{node.title}</Node>
          ))}
        </Hierarchy> */}

        <Node title="Title here" description="Sample description" />
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
      resetLocation
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
