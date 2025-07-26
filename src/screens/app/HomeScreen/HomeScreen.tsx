import {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>();
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);
  const renderItem: ListRenderItem<Post> = ({item}) => <PostItem post={item} />;
  return (
    <Screen style={$screen} scrollable>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={post => post.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
