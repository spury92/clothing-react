import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!')
  }

  componentDidMount() {
    console.log('ComponentDidMount!')
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate!')
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount!')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate', nextProps)
    return nextProps.text !== this.props.text
  }
}

export default Lifecycles;
