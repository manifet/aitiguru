Ext.define("test-aitiguru.controller.ProductGridController", {
  extend: "Ext.app.Controller",
  init: function () {
    this.control({
      "button[action=showProducts]": {
        click: this.showProducts,
      },
      "productgrid numberfield[itemId=idFilter]": {
        specialkey: this.applyProductsFilter,
      },
      "productgrid textfield[itemId=descriptionFilter]": {
        specialkey: this.applyProductsFilter,
      },
    });
  },

  showProducts: function (button) {
    const tabPanel = button.up("window").down("tabpanel");
    let productTab = button.up("window").down("productgrid");
    if (!productTab) {
      productTab = tabPanel.add({
        xtype: "productgrid",
        title: "Products list",
      });
      tabPanel.setActiveTab(productTab);
    }
  },

  applyProductsFilter: function (field, e) {
    if (e.getKey() === e.ENTER) {
      const grid = field.up("productgrid").down("grid"),
        store = grid.getStore(),
        idFilterField = field.up("productgrid").down("#idFilter"),
        descriptionFilterField = field
          .up("productgrid")
          .down("#descriptionFilter"),
        idValue = idFilterField.getValue(),
        descriptionValue = descriptionFilterField.getValue().toLowerCase();

      store.clearFilter();
      if (idValue) {
        store.addFilter({
          property: "id",
          value: idValue,
        });
      }
      if (descriptionValue) {
        store.addFilter({
          property: "description",
          value: descriptionValue,
          anyMatch: true,
        });
      }
    }
  },
});
