import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner.js';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData) {
        this.updateData();
      }
    }

    updateData () {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;