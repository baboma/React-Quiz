import React, { Component } from 'react';



class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    }; 
  }
  
  handleChange = (event) => {
    const {setScore, setIndexQuestion, question} = this.props;
    this.setState({selected: event.target.value});
    if (this.state.selected === question.correct) {
      var output = document.getElementsByTagName('label');
      output.class = "custom-control-label text-success"
    }
  }

  handleClick = () => {
    //event.preventDefault();
    const {setScore, setIndexQuestion, question} = this.props;
    //var selected = event.target.value;
    if(this.state.selected === question.correct) {
      setScore(this.props.score + 1);
    }    
    setIndexQuestion(this.props.indexQuestion + 1);
  }
  render() {
    const {id} = this.props;
    return (<div>
      {this.props.choices.map(choice => {
        return (<li key={choice.id} className="list-group-item">  
          <div className="custom-control custom-radio">
            <input className="custom-control-input" type="radio" 
              id={"customRadio"+choice.id}
              name={id} value={choice.id} 
              onClick={this.handleChange}
            />
            <label className="custom-control-label" htmlFor={"customRadio"+choice.id}> 
              {choice.id}&nbsp;{choice.text}
            </label>
          </div>
        </li>);
      })}
      <br/>
      <div className="row justify-content-end">
        <button type="button" className="btn btn-outline-primary" onClick={this.handleClick}>
          Validate
        </button>
      </div>
      
    </div>);
  }
}

export default CheckList;
