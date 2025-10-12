import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('ProfileScreen', {userId: author.id});
  };

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" preset="paragraphMedium" semiBold>
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
