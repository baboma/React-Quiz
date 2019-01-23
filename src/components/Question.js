import React, { Component } from 'react';
import CheckList from './CheckList';


class Question extends Component {

  render() {
    const {question} = this.props; 
    const cardStyle = {
      width: "30rem"
    };
    return(<div className="card" style={cardStyle}>
      <div className="card-header">
        <div className="card-title h6">{question.text}</div>
      </div>
      <div className="card-body">
        <ul className="list-group text-left">
          <CheckList 
            choices={question.choices} 
            id={question.id}
            {...this.props}
          />
        </ul>
      </div>      
    </div>);
  }
}

export default Question;