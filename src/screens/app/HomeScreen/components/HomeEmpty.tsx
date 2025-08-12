import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
  let component = <Text>Não há publicações no seu feed</Text>;
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }
  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" bold mb="s16">
          Erro ao carregar o feed
        </Text>
        <Button title="Tentar novamente" onPress={refetch} />
      </>
    );
  }
  return (
    <Box flex={1} justifyContent="center" alignItems="center" padding="s16">
      {component}
    </Box>
  );
}
