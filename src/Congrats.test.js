import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import {findByTestAttr, checkProps} from '../test/testUtils';


const defaultProps = {success: false}

const setup = (props = {})=> 
{
    const setupProps = {...defaultProps, ...props}
return shallow(<Congrats {...setupProps} />)

}

test('renders without error', ()=>{
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);

})

test('renders no text when the sucess prop is false', ()=>{
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
})

test('renders non-empty congrats message when success prop is true', ()=>{
    const wrapper = setup({success: true});
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.length).toBe(1);
})

test('does not throw warning', ()=>{
    const expectedProps = { success: false};

   checkProps(Congrats, expectedProps);

})