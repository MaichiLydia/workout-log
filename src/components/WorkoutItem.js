import React, { Component } from 'react'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

class WorkoutItem extends Component {
  
  render() {
    return (
      <tr className="table__row">
        <td> {this.props.workout.duration}</td>
        <td> {this.props.activity}</td>
        <td> {moment(this.props.workout.date).format('DD/MM/YYYY')}</td>
        <td> <button className="table__btn" title="Remove item" onClick={() => this.props.removeWorkout(this.props.workout.id)}><FontAwesomeIcon icon={faTimes} /></button>  
        </td>
      </tr>
    )
  }
}

export default WorkoutItem
