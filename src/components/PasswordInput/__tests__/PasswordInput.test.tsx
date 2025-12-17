import {fireEvent, render, screen} from 'test-utils';

import {PasswordInput, IconProps} from '@components';

describe('<PasswordInput/>', () => {
  test('render component', () => {
    const mockedOnChange = jest.fn();
    render(<PasswordInput label="Password" onChange={mockedOnChange} />);
  });
  it('starts with hidden password', () => {
    render(<PasswordInput label="Password" placeholder="password" />);
    const inputElement = screen.getByPlaceholderText('password');
    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });
  it('should show the password and change to eye-off icon when pressing the eye-icon', () => {
    const mockedOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        onChange={mockedOnChange}
      />,
    );
    const eyeIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);
    expect(eyeOffIconElement).toBeTruthy();
    const inputElement = screen.getByPlaceholderText('password');
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
