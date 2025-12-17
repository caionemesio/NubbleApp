import {fireEvent, render, screen} from 'test-utils';

import {PostItem} from '../PostItem';

import {mockedPost} from './MockedData/mockedPost';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostItem/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    render(<PostItem post={mockedPost} />);
  });
  it('should not show the comment link if it has no comments', () => {
    render(<PostItem post={{...mockedPost, commentCount: 0}} />);
    const commentLink = screen.queryByText(/comentário/);
    expect(commentLink).toBeFalsy();
  });
  it('should navigates to PostCommentScreen when pressing the comment link', () => {
    render(<PostItem post={{...mockedPost, commentCount: 2}} />);
    const commentLinkElement = screen.getByText(/comentário/);
    fireEvent.press(commentLinkElement);
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
