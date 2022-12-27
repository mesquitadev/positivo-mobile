import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Avatar from '../Avatar';

interface AvatarProps {
  name: string | undefined;
  userRole: string | undefined;
}

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(15)}px;
`;

export const Role = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(12)}px;
`;

export const UserdataContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const NameContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export default function UserData({ name, userRole, ...rest }: AvatarProps) {
  return (
    <UserdataContainer {...rest}>
      <Avatar name={name} />
      <NameContainer>
        <Name>{name}</Name>
        <Role>{userRole}</Role>
      </NameContainer>
    </UserdataContainer>
  );
}
