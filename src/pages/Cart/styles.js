import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.dark};
  padding: 10px;
`;

export const ProductList = styled.View`
  padding: 10px;
  background: ${colors.light};
  border-radius: 4px;
  margin: 15px;
`;
