import React, { Component } from 'react';
// import { Form, FormGroup, Input } from 'reactstrap';

import {
  Wrapper,
  Node,
  Title,
  VerticalArrow,
  HorizontalArrow,
  Level,
  Child
} from './style';

class Hierarchy extends Component {
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
    const { title, description, children } = this.props;

    return (
      <Wrapper>
        <VerticalArrow />
        <Node
          onClick={() => {
            this.produceNode();
          }}
        >
          <Title>{title}</Title>
          {description}
        </Node>
        <VerticalArrow top />
        <HorizontalArrow />

        <Level>
          <Child>
            <VerticalArrow bottom />
            <Node
              onClick={() => {
                this.produceNode();
              }}
            >
              <Title>{title}</Title>
              {description}
            </Node>
          </Child>
          <Child>
            <VerticalArrow bottom />
            <Node
              onClick={() => {
                this.produceNode();
              }}
            >
              <Title>{title}</Title>
              {description}
            </Node>
          </Child>
        </Level>
      </Wrapper>
    );
  }
}

export default Hierarchy;
