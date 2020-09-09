import React from 'react';
import Enzyme , { shallow } from 'enzyme';
import {newEnzymeAdapter} from '../Tests/testUtils';
import Congrats from '../Components/Congrats';
import {findByTestAttr} from '../Tests/testUtils';
import checkPropTypes from 'check-prop-types';

Enzyme.configure(newEnzymeAdapter);

const setup = (props = {}) => {
    return shallow(<Congrats {...props}/>)
}

test('renders without crashing', () => {
    const wrapper = setup();
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

test('does now throw a warning with expeceted props', () => {
    const expectedProps = setup({success:false});
    const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
    

})