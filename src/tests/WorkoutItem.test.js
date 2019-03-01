import React from "react";
import WorkoutItem from "../components/WorkoutItem"
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';


it('check if WorkoutItem receives the right values', () => {
  const props = {
        workout:{
          id: "1",
          duration:"10:10",
          "activityId": 2,
          "date": '2019-01-01'
        }
      }
  const select = mount(<WorkoutItem {...props}/>)
  expect(toJson(select)).toMatchSnapshot()
});
