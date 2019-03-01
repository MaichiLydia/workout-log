import React from 'react';
import Input from '../components/Form/Input';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it('check if input receives the right values', () => {
    const props = {
        id: "name",
        type: "text",
        name: "name",
        required: true,
        placeholder: "Digite o texto aqui",
        onChange: () => true
        }
    const input = mount(<Input {...props}/>)
    expect(toJson(input)).toMatchSnapshot()
});


