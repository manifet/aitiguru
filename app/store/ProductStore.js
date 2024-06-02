Ext.define("test-aitiguru.store.ProductStore", {
  extend: "Ext.data.Store",
  alias: "store.ProductStore",
  model: "test-aitiguru.model.ProductModel",
  data: [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      price: 100.0,
      quantity: 10,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      price: 200.0,
      quantity: 0,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description 3",
      price: 300.0,
      quantity: 30,
    },
  ],
});
