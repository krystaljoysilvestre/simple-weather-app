import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCities, saveLocation } from '../../actions/locationAction';

import { Dropdown } from './style';
class SearchLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      loading: false
    };
  }

  fetchLocation = location => {
    this.setState({
      loading: true
    });

    getCities(location).then(res => {
      this.setState({
        cities: res,
        loading: false
      });
    });
  };

  render() {
    const { cities, loading } = this.state;
    const { saveLocation } = this.props;

    return (
      <Dropdown
        busy={loading}
        data={cities}
        textField='title'
        filter="startsWith"
        placeholder="Search city"
        onChange={value => this.fetchLocation(value)}
        onSelect={value => saveLocation(value.title, value.woeid)}
      />
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
)(SearchLocation);
