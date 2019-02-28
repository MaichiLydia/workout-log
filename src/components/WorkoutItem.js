import React, { Component } from 'react'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import PropTypes from "prop-types";

class WorkoutItem extends Component {
  
  render() {
    return (
      <tr className="table__content-row">
        <td className="table__content-column"> {this.props.workout.duration}</td>
        <td className="table__content-column"> {this.props.activity}</td>
        <td className="table__content-column"> {moment(this.props.workout.date).format('DD/MM/YYYY')}</td>
        <td className="table__content-column"> <button className="table__btn" title="Remove item" onClick={() => this.props.removeWorkout(this.props.workout.id)}><FontAwesomeIcon icon={faTimes} /></button>  
        </td>
      </tr>
    )
  }
}

WorkoutItem.propTypes = {
  workout: PropTypes.object,
  removeWorkout: PropTypes.func,
};

export default WorkoutItem
