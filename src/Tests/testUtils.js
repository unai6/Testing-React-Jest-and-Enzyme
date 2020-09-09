import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import checkPropTypes from 'check-prop-types';


export const enzymeAdapter = Enzyme.configure({adapter : new EnzymeAdapter()})

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name 
        );
    expect(propError).not.toBeUndefined();
};

