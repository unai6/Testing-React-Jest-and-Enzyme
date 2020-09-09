import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'


Enzyme.configure({adapter: new EnzymeAdapter()});
export const newEnzymeAdapter = ({adapter : new EnzymeAdapter()})

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};
