import React from 'react';
import { shallow } from 'enzyme';
import Congrats from '../Components/Congrats';
import {findByTestAttr} from '../Tests/testUtils';
import {checkProps} from '../Tests/testUtils';

const defaultProps = {success:false};

const setup = (props = {}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setUpProps}/>)
}

test('renders without crashing', () => {
    const wrapper = setup({success:false});
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(congratsComponent.length).toBe(1);
});

test('renders no tect when `success` props is `false`', () => {
    const wrapper = setup({success:false});
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(congratsComponent.text()).toBe(''); 

});

test('renders npo empty congrats message when `success` prop is `true`', () => {
    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);    
});

test('does now throw a warning with expected props', () => {
    const expectedProps = setup({success:false});
    checkProps(Congrats, expectedProps);
});