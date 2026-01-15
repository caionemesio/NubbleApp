import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';
import {useAuthCredentials} from '@services';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentItem,
  PostCommentBottom,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;

  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {userId} = useAuthCredentials();

  const {bottom} = useAppSafeArea();
  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        postAuthorId={postAuthorId}
        userId={userId}
      />
    );
  }

  return (
    <Screen canGoBack title="Comentários" flex={1}>
      <Box justifyContent="space-between" flex={1}>
        <FlatList
          data={list}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            hasNextPage ? (
              <PostCommentBottom fetchNextPage={fetchNextPage} />
            ) : null
          }
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
