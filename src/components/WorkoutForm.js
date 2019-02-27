import React, { Component } from "react";
import Form from './Form/Form';
import FieldContainer from './Form/FieldContainer';
import Button from './Form/Button';
import uuid from 'uuid';

class WorkoutForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      duration:{
        value: '',
        error: ''
      },
      'activityId':{
        value: '',
        error: ''
      },
      date:{
        value:'',
        error: ''
      }
    }
  }

  createWorkout = (e) => {
    e.preventDefault();
    const workout = {
      id: uuid.v4(),
      duration: this.state.duration.value,
      activityId: parseInt(this.state.activityId.value),
      date: this.state.date.value 
    }
    
    const isDisabled = this.isDisabled();
    if(!isDisabled){
      this.props.addWorkout(workout);
      e.currentTarget.reset();
    }
  };
  
  handleChange = ( inputName, inputValue, error = '') => {
    this.setState({
      [inputName]: {
        value: inputValue,
        error: error
      }
    })
  };
  
  isDisabled(){
    return !this.state.duration.value ||
            this.state.duration.error ||
            !this.state.date.value ||
            this.state.date.error
  };
  
  
  render() {
    return (
      <div className="container">
        <Form title="Workout Log"
          text="Add your exercises here !"
          onSubmit={this.createWorkout}>
          <FieldContainer error={this.state.duration.error}>
            <FieldContainer.Input 
              id="duration" 
              name="duration" 
              type="time" 
              required={true} 
              onChange={this.handleChange}/>
         </FieldContainer>
          <FieldContainer error={this.state.activityId.error}>
            <FieldContainer.Select 
              id="activityId" 
              name="activityId" 
              options={this.props.activities} 
              required={true} 
              onChange={this.handleChange} />
          </FieldContainer>
          <FieldContainer error={this.state.date.error}>
            <FieldContainer.Input 
            id="date" 
            type="date" 
            name="date" 
            required={true} 
            onChange={this.handleChange} />
          </FieldContainer>

          <Button disabled={this.isDisabled}>Add</Button>
        </Form>
      </div>
    );
  }
}

export default WorkoutForm;
