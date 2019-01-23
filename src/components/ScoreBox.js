import React, { Component } from 'react';



class Scorebox extends Component {

  render() {
    return(<div className="alert alert-primary col-md-12" role="alert">
    <div className="row">
       <p className="text-left font-weight-bold col-md-6" >
        **Question {this.props.indexQuestion + 1} out of {this.props.questions.length}**
      </p>
      <p className="text-right font-weight-bold col-md-6" >
        Score: {this.props.score}
      </p>
    </div>
     
    </div>);
  }
}

export default Scorebox;