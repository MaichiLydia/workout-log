import React, { Component } from 'react';
import WorkoutItem from './WorkoutItem';
import { sumTimes } from '../helpers';
class WorkoutsInfo extends Component {

  render() {
    return (
      <div>
           <table>
           <tbody>
               <tr>
                   <th>Tempo</th>
                   <th>Tipo</th>
                   <th>Data</th>
                   <th>Edit</th>
               </tr>
                {this.props.workouts.map( (workout) => (
                <WorkoutItem key={workout.id} activity={this.props.activities[workout.activityId-1].name} workout={workout} removeWorkout={this.props.removeWorkout}/>
                ))}
           </tbody>
           </table> 

            <h3>{ sumTimes(this.props.workouts.map(workout => workout.duration)) } of Exercises </h3>

      </div>
    )
  }
}

export default WorkoutsInfo;