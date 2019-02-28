import React from "react";
import Select from "../components/Form/Select"
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';


it('check if select receives the right values', () => {
  const props = {
      id: "cars",
      name: "name",
      required: true,
      options: [{ id: 1, name: "Gol"}, { id: 2, name: "FordFiesta"}, {id:3, name:"Uno"} ],
      onChange: () => true
      }
  const select = mount(<Select {...props}/>)
  expect(toJson(select)).toMatchSnapshot()
});
