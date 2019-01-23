import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import QuestionList from './components/QuestionList';
import ScoreBox from './components/ScoreBox';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions : [
        {
          id: this.create_UUID(),
          index: 0,
          text: "1. Malcolm has taken part ... the competition for the tenth consecutive time.",
          choices: [{
            id: "a)",
            text: "at"
          }, {
            id: "b)",
            text: "in"
          }, {
            id: "c)",
            text: "for"
          }, {
            id: "d)",
            text: "with"
          }],
          correct: "b)"
        }, {
          id: this.create_UUID(),
          index: 1,
          text: "2. We have ... in-depth research into Molecular Biology.",
          choices: [{
            id: "a)",
            text: "did"
          }, {
            id: "b)",
            text: "made"
          }, {
            id: "c)",
            text: "carried out"
          }, {
            id: "d)",
            text: "conduced"
          }],
          correct: "c)"
        }, {
          id: this.create_UUID(),
          index: 2,
          text: "3. The various entrance examinations taken by 2 ... school leavers," +
            "will be centralised by the Education Ministry next year.",
          choices: [{
            id: "a)",
            text: "millions"
          }, {
            id: "b)",
            text: "in a million"
          }, {
            id: "c)",
            text: "millions of"
          }, {
            id: "d)",
            text: "million"
          }],
          correct: "d)"
        }, {
          id: this.create_UUID(),
          index: 3,
          text: "4. “... do you go to the theatre?” “Once in a blue moon”.",
          choices: [{
            id: "a)",
            text: "Whenever"
          }, {
            id: "b)",
            text: "How often"
          }, {
            id: "c)",
            text: "How about"
          }, {
            id: "d)",
            text: "How long"
          }],
          correct: "b)"
        }, {
          id: this.create_UUID(),
          index: 4,
          text: "5. If the syllabus ... changed, we would progress in marketing much faster.",
          choices: [{
            id: "a)",
            text: "is to be"
          }, {
            id: "b)",
            text: "has been"
          }, {
            id: "c)",
            text: "were"
          }, {
            id: "d)",
            text: "be"
          }],
          correct: "c)"
        }, {
          id: this.create_UUID(),
          index: 5,
          text: "6. You can reach me ... 0985/59096378.",
          choices: [{
            id: "a)",
            text: "with"
          }, {
            id: "b)",
            text: "by"
          }, {
            id: "c)",
            text: "in"
          }, {
            id: "d)",
            text: "on"
          }],
          correct: "d)"
        }, {
          id: this.create_UUID(),
          index: 6,
          text: "7. It is really not the best way to proceed, ... it?",
          choices: [{
            id: "a)",
            text: "won't"
          }, {
            id: "b)",
            text: "is"
          }, {
            id: "c)",
            text: "isn't"
          }, {
            id: "d)",
            text: "wasn't"
          }],
          correct: "b)"
        }, {
          id: this.create_UUID(),
          index: 7,
          text: "8. I have no time. Well, you are just going to have to ... the time for me then.",
          choices: [{
            id: "a)",
            text: "do"
          }, {
            id: "b)",
            text: "make"
          }, {
            id: "c)",
            text: "have"
          }, {
            id: "d)",
            text: "be"
          }],
          correct: "d)"
        }, {
          id: this.create_UUID(),
          index: 8,
          text: "9. Melinda speaks ...",
          choices: [{
            id: "a)",
            text: "perfectly Russian"
          }, {
            id: "b)",
            text: "a perfect Russian"
          }, {
            id: "c)",
            text: "Russain perfectly"
          }, {
            id: "d)",
            text: "Russian perfect"
          }],
          correct: "c)"
        }, {
          id: this.create_UUID(),
          index: 9,
          text: "10. We will have to work ... the cost of going to college very carefully.",
          choices: [{
            id: "a)",
            text: "out"
          }, {
            id: "b)",
            text: "of"
          }, {
            id: "c)",
            text: "off"
          }, {
            id: "d)",
            text: "for"
          }],
          correct: "a)"
        }
      ],
      score: 0,
      indexQuestion: 0
    }
  }

  create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = '4xxx-yxx7'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r && 0x3 || 0x8)).toString(16);
    });
    return uuid;
  }

  setScore = (val) => {
    this.setState({score: val});
  }

  setIndexQuestion = (val) => {
    this.setState({indexQuestion: val});
  }

  render() {
    return (
      <div className="App">
        {(this.state.indexQuestion + 1 > this.state.questions.length) 
          ? <Results {...this.state}/>
          : <ScoreBox {...this.state}/> 
        }
        <QuestionList {...this.state} 
          setScore={this.setScore} 
          setIndexQuestion={this.setIndexQuestion}
        />
      </div>
    );
  }
}

export default App;
