Ext.define("test-aitiguru.controller.ProductCardController", {
  extend: "Ext.app.Controller",
  init: function () {
    this.control({
      "productgrid grid": {
        cellclick: this.openProductCard,
      },
      "button[action=saveProduct]": {
        click: this.saveProduct,
      },
      "button[action=cancelEdit]": {
        click: this.cancelEdit,
      },
    });
  },

  openProductCard: function (view, cell, cellIndex, record, row, rowIndex, e) {
    if (cellIndex === 1) {
      // Assuming "name" is the second column
      var formWindow = Ext.create("test-aitiguru.view.ProductCard");
      formWindow.down("form").loadRecord(record);
      formWindow.show();
    }
  },

  saveProduct: function (button) {
    var win = button.up("window"),
      form = win.down("form"),
      record = form.getRecord(),
      values = form.getValues();

    if (form.isDirty()) {
      record.set(values);
      Ext.Msg.alert("Status", "Changes saved successfully.");
    }

    win.close();
  },

  cancelEdit: function (button) {
    button.up("window").close();
  },
});
