import React, { Component } from 'react';



class Results extends Component {

  render() {
    var percent = this.props.score / this.props.questions.length * 100;
    var message;
    if(percent >= 80) {
      message = <h1 className="text-success">{percent}% - Awesome job...</h1>;
    } else if(percent >= 60 && percent < 80) {
      message = <h1 className="text-warning">{percent}% - You did ok...</h1>;;
    } else {
      message = <h1 className="text-danger">{percent}% - You did horrible...</h1>;
    }
    return(<div className="card">
      <div className="card-body">
        <h4>You got {this.props.score} out of {this.props.questions.length} correct answer(s).</h4>
        {message}
        <hr/>
        <a href="/index.js">Take It Again...</a>
      </div>
    </div>);
  }
}

export default Results;