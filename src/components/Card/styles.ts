import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const SolidContainer = styled.View`
  //position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[40]};
  height: 150px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: ${RFPercentage(30)}px;
  padding: 0 ${RFValue(17)}px;
`;

export const TouchableContainer = styled.TouchableOpacity`
  //position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[40]};
  justify-content: center;
  height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
