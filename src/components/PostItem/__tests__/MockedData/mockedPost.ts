import {Post} from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'https://via.placeholder.com/150',
  commentCount: 1,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'Post text',

  author: {
    id: 4,
    name: 'Post author',
    profileURL: 'https://via.placeholder.com/150',
    userName: 'post_author',
  },
};
