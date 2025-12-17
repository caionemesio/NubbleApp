import {StyleSheet} from 'react-native';

import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button" {...props} />);
  const titleElement = screen.queryByText('Button');
  const buttonElement = screen.getByTestId('button');
  const loadingElement = screen.queryByTestId('activity-indicator');
  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}
describe('<Button />', () => {
  it('should render correctly', () => {
    renderComponent();
  });
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });
    fireEvent.press(titleElement!);

    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });

  it('does not call onPress function when is disabled and its pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(titleElement!);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should render gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyle = StyleSheet.flatten(titleElement!.props.style);
    expect(titleStyle.color).toBe(theme.colors.gray2);
  });
  describe('when button is loading', () => {
    it('show activity indicator', () => {
      const {loadingElement} = renderComponent({loading: true});
      expect(loadingElement).toBeTruthy();
    });
    it('hides button title', () => {
      const {titleElement} = renderComponent({loading: true});
      expect(titleElement).toBeFalsy();
    });
    it('should not be called when is loading', () => {
      const mockedOnPress = jest.fn();
      const {buttonElement} = renderComponent({
        onPress: mockedOnPress,
        loading: true,
      });
      fireEvent.press(buttonElement);

      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
