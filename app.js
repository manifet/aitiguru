Ext.application({
  name: "test-aitiguru",
  requires: [
    "test-aitiguru.view.Login",
    "test-aitiguru.view.Main",
    "test-aitiguru.view.ProductGrid",
    "test-aitiguru.view.ProductCard",
  ],
  controllers: [
    "test-aitiguru.controller.MainController",
    "test-aitiguru.controller.ProductGridController",
    "test-aitiguru.controller.ProductCardController",
  ],
  launch: function () {
    Ext.create("test-aitiguru.view.Login").show();
  },
});
