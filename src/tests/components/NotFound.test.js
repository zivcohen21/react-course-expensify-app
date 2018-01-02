import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/NotFound';

test('render NotFound correctly', () => {
    const wrapper = shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();

});