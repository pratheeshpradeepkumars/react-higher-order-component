import React, { Component } from "react";

const isEmpty = prop =>
  prop === undefined ||
   prop === null ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

const Loader = (loader) => WrappedComponent => {
  return class LoaderHOC extends Component {

    componentDidMount() {
      this.startTimer = Date.now();
    }

    componentWillUpdate(nextProps) {
      if (!isEmpty(nextProps[loader])) {
        this.endTimer = Date.now();
      }
    }

    render(){

      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };
      return isEmpty(this.props[loader]) ?
        (
          <p>Loading...</p>
        ) :
        (
          <WrappedComponent {...this.props} {...myProps} />
        )
        
    }
  }
}

export default Loader;