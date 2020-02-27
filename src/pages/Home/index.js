import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
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

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Add to cart</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  return (
    <Container>
      <ProductList>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={renderProduct}
          extraData={amount}
        ></FlatList>
      </ProductList>
    </Container>
  );
}
