Ext.define("test-aitiguru.controller.MainController", {
  extend: "Ext.app.Controller",
  init: function () {
    this.control({
      "button[action=showProducts]": {
        click: this.showProducts,
      },
      "button[action=logout]": {
        click: this.logout,
      },
    });
  },
  showProducts: function (button) {
    const tabPanel = button.up("window").down("tabpanel");
    let productTab = button.up("window").down("productgrid");
    if (!productTab) {
      let productTab = tabPanel.add({
        xtype: "productgrid",
        title: "Products",
        closable: true,
      });
      tabPanel.setActiveTab(productTab);
    }
  },
  logout: function (button) {
    button.up("window").close();
    Ext.create("test-aitiguru.view.Login").show();
  },
});
