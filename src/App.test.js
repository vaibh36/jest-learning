import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('test without error', () => {
  const wrapper =setup();
  const appComponents = findByTestAttr(wrapper, 'component-app')
  expect(appComponents.length).toBe(1)
});

test('test renders button', () => {
  const wrapper =setup();
  const appComponents = findByTestAttr(wrapper, 'increment-button');
  expect(appComponents.length).toBe(1)
});

test('test renders counter display', () => {
  const wrapper =setup();
  const appComponents = findByTestAttr(wrapper, 'counter-display');
  console.log('Loking for the text now:-',appComponents.text())
  expect(appComponents.length).toBe(1)
});

test('tests cunter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("0")
});

test('tests that clicking the button increments the counter', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("1");
});
