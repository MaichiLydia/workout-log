import React from "react";
import WorkoutForm from "../components/WorkoutForm"
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';


it('check if WorkoutItem receives the right values', () => {
  const props = {
        workouts:[{
          id: "1",
          duration:"10:10",
          "activityId": 2,
          "date": '2019-01-01'
        },{
          id: "2",
          duration:"11:10",
          "activityId": 4,
          "date": '2019-02-01'
        },{
          id: "3",
          duration:"10:13",
          "activityId": 2,
          "date": '2019-04-01'
        }],
        activities:[{   
              id: "1",
              name: "Bike"
          },
          {   
              id: "2",
              name: "Jog"
          },
          {   
              id: "3",
              name: "Run"
          },
          {   
              id: "4",
              name: "Swim"
          }
      ]

      }
  const workoutForm = mount(<WorkoutForm {...props}/>)
  expect(toJson(workoutForm)).toMatchSnapshot()
});
