import React, { Component } from 'react'
import './App.css'
import sampleActivities from './sample-activities'
import WorkoutForm from './components/WorkoutForm'
import WorkoutsInfo from './components/WorkoutsInfo'



class App extends Component {
  state = {
    activities: [],
    workouts: []
  }
  componentDidMount(){
    this.setState({activities : sampleActivities});
    try{
      const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts'));
      if(savedWorkouts){
        this.setState(()=> ({workouts: savedWorkouts}));

      }
      
    } catch(e){
      
    }
  }

  componentDidUpdate(){
    localStorage.setItem("savedWorkouts", JSON.stringify(this.state.workouts))
  }
  
  addWorkout = (workout) => {
    this.setState({workouts : [...this.state.workouts, workout]})

  }

  removeWorkout = (id) => {
    this.setState({workouts: this.state.workouts.filter(item => item.id !== id)})

  }

   
  sortBy = (key) => {
    let arrayCopy = [...this.state.workouts];
    arrayCopy.sort(( a, b) => 
     {  
      if (a[key] < b[key]) return -1; 
      if (a[key] > b[key]) return 1;
      return 0;
    })
    this.setState({workouts: arrayCopy});
  }

  render() {
    return (
      <div className="App">
          <WorkoutForm activities={this.state.activities} addWorkout={this.addWorkout} />
          <WorkoutsInfo activities={this.state.activities} workouts={this.state.workouts} removeWorkout={this.removeWorkout} sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default App
