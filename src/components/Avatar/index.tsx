import FeatherIcon from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface AvatarProps {
  name: string | undefined;
}

export const Container = styled.TouchableOpacity`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
export const Username = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;

export default function Avatar({ name, ...rest }: AvatarProps) {
  const initials = name?.split(' ').reduce((acc, subname) => acc + subname[0], '');
  return (
    <Container {...rest}>
      {name ? <Username>{initials}</Username> : <FeatherIcon name="user" size={20} />}
    </Container>
  );
}
