import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
`;

export const ProductList = styled.View`
  background-color: ${colors.dark};
`;

export const Product = styled.View`
  background: ${colors.light};
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 14px 0px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: ${colors.light};
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: ${colors.light};
`;
