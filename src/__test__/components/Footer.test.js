import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Footer Rendering', () => {
    expect(footer.length).toEqual(1);
  });

  test('Title render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });

  test('Copy lefts xd', () => {
    expect(footer.find('.Footer-copy').text()).toEqual('Todos los Izquierdos Reservados');
  });
});

describe('Footer Snapshot', () => {
  test('Test Footer UI', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
