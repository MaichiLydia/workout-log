import React from 'react';
import Button from '../components/Form/Button';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it('check render a disabled button', () => {
    const props = {
        disabled: true,
        children: "Click me !"
    }
    const button = mount(<Button {...props}></Button>)

    expect(toJson(button)).toMatchSnapshot()

});

it('should render an active button', () => {
    const props = {
        disabled: false,
        children: "Click me !"
    }
    const button = mount(<Button {...props}></Button>)

    expect(toJson(button)).toMatchSnapshot()

});