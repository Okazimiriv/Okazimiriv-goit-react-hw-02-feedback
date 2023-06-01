import React, { Component } from "react";
import Container from "components/Container";


class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = (event) => {
    const feedBackType = event.target.textContent.toLowerCase();
    console.log(feedBackType);
    this.setState((prevState) => {
      return {
        [feedBackType]: prevState[feedBackType] + 1
      };   
  });
};

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onFeedbackClick}>Good</button>
        <button type="button" onClick={this.onFeedbackClick}>Neutral</button>
        <button type="button" onClick={this.onFeedbackClick}>Bad</button>
        <h2>Statistics</h2>
        <p>Good</p>
        <span>{this.state.good}</span>
        <p>Neutral</p>
        <span>{this.state.neutral}</span>
        <p>Bad</p>
        <span>{this.state.bad}</span>
      </Container>
    );
  }  
};

export default App;
