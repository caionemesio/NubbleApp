import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

type PostImageProps = Pick<Post, 'imageURL'>;
export function PostImage({imageURL}: PostImageProps) {
  return (
    <Image
      resizeMode="cover"
      source={{uri: imageURL}}
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
