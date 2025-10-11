import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;
export function PostBottom({author, text, commentCount, id}: PostBottomProps) {
  const navigation = useNavigation();
  const commentText = getCommentText(commentCount);
  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: author.id,
    });
  }
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToPostCommentScreen}
          mt="s8"
          preset="paragraphSmall"
          bold
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return '1 comentário';
  } else {
    return `${commentCount} comentários`;
  }
}
