import React from "react";
import FieldContainer from "../components/Form/FieldContainer"
import Input from '../components/Form/Input' 
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';


it('check if FieldContainer receives the right values', () => {
  const props = {
      htmlFor: "name",
      children: <Input id="name"
      type="text"
      name="name"
      required={true}
      onChange={()=> true} />,
      }
  const fieldContainer = mount(<FieldContainer {...props}/>)
  expect(toJson(fieldContainer)).toMatchSnapshot()
});
