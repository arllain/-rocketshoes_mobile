import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo />
      <BasketContainer>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default Header;
