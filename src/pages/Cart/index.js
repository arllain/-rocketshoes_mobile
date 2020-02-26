import React from 'react';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ProductList } from './styles';

export default function Cart({ navigation, products }) {
  return (
    <Container>
      <ProductList />
    </Container>
  );
}
