import React from 'react';
import {shallow} from 'enzyme'
import {enzymeAdapter} from '../Tests/testUtils';
import Counter from '../Components/Counter';

enzymeAdapter;


const setup = (props, state = null) => {
const wrapper = shallow(<Counter {...props}/>);

if(state) wrapper.setState(state);
return wrapper;

};

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error' , () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const findWithoutDisplay = findByAttr(wrapper, 'decrement-button');
  expect(findWithoutDisplay.length).toBe(1);
});

test('counter starts at 5', () => {
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState).toBe(5)
});

test('clicking button decrements counter display', () => {
  const counter = 5
  const wrapper = setup(null , {counter});
  
  const findWithoutDisplay = findByAttr(wrapper, 'decrement-button');
  findWithoutDisplay.simulate('click');
  
  const counterDisplay = findByAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter -1)
})

test('renders error for clicking below 0', () => {
  const wrapper = setup();
  const errorRender = findByAttr(wrapper, 'error-render');
  expect(errorRender.length).toBe(1);
});

test('expects error to be in initialState', () => {
  const wrapper = setup();
  const errorInInitialState = wrapper.state('error');
  expect(errorInInitialState).toBe('');
})