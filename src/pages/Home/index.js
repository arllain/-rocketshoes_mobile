import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: colors.dark,
    },
  };

  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>1</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Add to cart</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          ></FlatList>
        </ProductList>
      </Container>
    );
  }
}
