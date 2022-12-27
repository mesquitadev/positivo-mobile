// import logoBlank from '@assets/images/logo-menu.png';
import { getBottomSpace } from 'react-native-iphone-x-helper';
// import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Gradient = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  // source: logoBlank,
  resizeMode: 'contain',
})`
  width: 220px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
  margin-bottom: 11px;
`;

export const Form = styled.View`
  padding: 24px;
  align-self: stretch;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 0.2px;
  border-top-color: #fff;
  padding: 16px 0 ${20 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 16px;
`;

export const CreateAccountButtonBoldText = styled.Text`
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  margin-left: 16px;
`;

export const Fields = styled.View``;
