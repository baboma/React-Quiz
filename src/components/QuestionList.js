import React, { Component } from 'react';
import Question from './Question';


class QuestionList extends Component {

  render() {
    const question = this.props.questions.map(question => {
      return (question.index === this.props.indexQuestion) ?
        <Question key={question.id} question={question} {...this.props}/> : ""
    })
    return(<div className="questions">
      {question}
    </div>);
  }
}

export default QuestionList;