import React, { Component } from "react";
import WorkoutItem from "./WorkoutItem";
import { sumTimes } from "../helpers";
import PropTypes from "prop-types";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkoutsInfo extends Component {
  
  tableSortBy(key){
    this.props.sortBy(key);
  }


  render() {
    return (
      <div className="container">
        <div className="table__container">
          <table className="table">
            <tbody>
              <tr className="table__head-row">
                <th
                  className="table__head-column"
                  onClick={() => this.tableSortBy("duration")}
                > 
                  Duration <FontAwesomeIcon icon={faSortUp} />
                </th>
                <th
                  className="table__head-column"
                  onClick={()=> this.tableSortBy("activityId")}
                >
                  Activity <FontAwesomeIcon icon={faSortUp} />
                </th>
                <th
                  className="table__head-column"
                  onClick={()=> this.tableSortBy("date")}
                >
                  Date <FontAwesomeIcon icon={faSortUp} />
                </th>
                <th className="table__head-column">Remove</th>
              </tr>
              {this.props.workouts.map(workout => (
                <WorkoutItem
                  key={workout.id}
                  activity={this.props.activities[workout.activityId - 1].name}
                  workout={workout}
                  removeWorkout={this.props.removeWorkout}
                />
              ))}
            </tbody>
          </table>
        </div>

        <h3>
          {sumTimes(this.props.workouts.map(workout => workout.duration))} hours
          of exercises{" "}
        </h3>
      </div>
    );
  }
}

WorkoutItem.propTypes = {
  workouts: PropTypes.array,
  activities: PropTypes.array,
  removeWorkout: PropTypes.func.isRequired,
  sortBy: PropTypes.func
};

export default WorkoutsInfo;
