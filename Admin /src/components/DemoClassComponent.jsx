import React from "react";
import { Button } from "react-bootstrap";

export class DemoClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`You clicked ${this.state.count} times`);
    }
  }

  componentWillMount = () => {
    console.log("Component mounted");
  };
  componentWillUnmount = () => {
    if (this.state.count === 10) {
    }
    console.log("Component unmounted");
  };

  render() {
    if (this.state.count >= 11) {
      return <></>;
    } else {
      return (
        <Button
          onClick={() => {
            this.increaseCount();
          }}
        >
          Press me {this.state.count}{" "}
        </Button>
      );
    }
  }
}
