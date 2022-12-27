import theme from '@theme/index';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

export default function Button({ title, onPress, loading, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      {loading ? <ActivityIndicator color={theme.colors.secondary} /> : <Title>{title}</Title>}
    </Container>
  );
}
