import 'intl';
import 'intl/locale-data/jsonp/en';

export const { format: formatPrice } = new Intl.NumberFormat('USD', {
  style: 'currency',
  currency: 'USD',
});
