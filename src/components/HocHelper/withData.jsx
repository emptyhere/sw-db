import React, { Component } from 'react';
import Loading from "../Loading/Loading";

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.props.getData()
      .then((data) => {
        this.setState({
          data
        });
      });    }


    render() {
      const { data } = this.state;

      if (!data) {
        return <Loading/>;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;