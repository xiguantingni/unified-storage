export default {
  namespace: 'products',
  state: {
  	products: [
     	{ name: 'dva', id: 1 },
     	{ name: 'antd', id: 2 }
  	]
  },
  reducers: {
    'delete'({ products }, { payload: id }) {
      return {
      	products: products.filter(item => item.id !== id)
      };
    },
  },
};
